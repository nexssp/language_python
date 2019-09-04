from nanomsg import Socket, BUS
import socket
import redis
import cPickle
import threading


class NotInitialized(object):
    def __repr__(self):
        return "NotInitialized"


class ChannelValue(object):
    def __init__(self):
        self._value = NotInitialized()

    def get(self):
        return self._value

    def set(self, new_value):
        self._value = new_value


class ChannelValueReceiver(threading.Thread):
    def __init__(self, channel):
        threading.Thread.__init__(self)
        self.daemon = True
        self.channel = channel
        self.lock = threading.Lock()

    def run(self):
        while True:
            data = self.channel._bus_socket.recv()
            channel_value = cPickle.loads(data)
            with self.lock:
                self.channel._value = channel_value


class Channel(object):
    def __init__(self, name, redis_host="localhost"):
        self.name = name
        self._bus_socket = Socket(BUS)
        self._value = ChannelValue()

        ### all this mess just to find a free port number,
        ### and it is still not ideal :(
        ### at the moment nanomsg breaks an assertion in case
        ### of "Address already in use" error
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.bind(('',0))
        port = s.getsockname()[1]
        s.close()
        ###
        self._bus_socket.bind("tcp://*:%d" % port)

        r = redis.Redis(redis_host)

        remote_channels_list = r.smembers("channel.%s" % name)
        for remote_channel in remote_channels_list:
            self._bus_socket.connect(remote_channel)
            
        # store channel in a redis "set"
        r.sadd("channel.%s" % name, "tcp://%s:%d" % (socket.getfqdn(), port))

        self._receiver_thread = ChannelValueReceiver(self)
        self._receiver_thread.start()

    def value(self):
        with self._receiver_thread.lock:
            return self._value.get()

    def set_value(self, new_value):
        with self._receiver_thread.lock:
            self._value.set(new_value)
        self._bus_socket.send(cPickle.dumps(self._value, protocol=-1))