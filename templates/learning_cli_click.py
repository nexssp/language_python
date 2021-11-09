import click

# Use --help for help based on the options below.


@click.command()
@click.option('--param1', default="value1", help='This is param1')
@click.option('--param2', prompt='value2', help='This is param2')
def run(param1, param2):
    """Just an example of simply cli program with click in python."""
    click.echo('This is awesome click %s!' % param1)


if __name__ == '__main__':
    run()
