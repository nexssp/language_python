# Nexss PROGRAMMER 2.x - Python3

import inspect
from dataclasses import dataclass, field, replace
from pprint import pprint

# No extra options: __eq__, __init__, __repr__
# frozen=True: __hash__, __setattr__ # immutable
# order=True: __ge__, __gt__, __le__, __lt__


@dataclass(frozen=True, order=True)
class Todo:
    id: int  # the same as id: field()
    # the same as title: str = field("My default todo")
    title: str = "My default todo"
    # to avoid using the same list ([])
    comments: list[int] = field(default_factory=list)
    example2: list[int] = field(
        default_factory=list, compare=False, repr=False, hash=False)


def main():
    todo = Todo(1, "My wonderful todo")
    pprint(todo)
    # NOTE: dataclasses.replace
    pprint(replace(todo, id=5, title="Updated frozen todo"))
    pprint(inspect.getmembers(Todo, inspect.isfunction))


if __name__ == '__main__':
    main()
