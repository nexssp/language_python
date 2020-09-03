# Python 3

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.

## Example

```sh
nexss myprogram.py
nexss myprogram.py # > to check --nxsCompiler="blender"
nexss py default compiler python27
```

## Links

- [Command line arguments](https://docs.blender.org/manual/en/latest/advanced/command_line/arguments.html)  
  <http://jonathansoma.com/tutorials/international-data/python-and-utf-8/>
- [PEP 8 - Style Guide For Python Code](https://www.python.org/dev/peps/pep-0008/)

## Tips and Tricks

### Smtpd server for debugging

```sh
python -u -m smtpd -n -c DebuggingServer localhost:8025 > /tmp/smtpd.log
```

## Package Manager pip / pip3

```sh
nexss py freeze # the same as below
pip3 freeze > requirements.txt (freezes packages used)

nexss py req the same as below
python3 -m pip install -r requirements.txt
```
