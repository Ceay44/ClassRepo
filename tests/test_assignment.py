import pytest
from assignment import add_numbers  # Importing the student's function

def test_addition():
    assert add_numbers(2, 2) == 4
    assert add_numbers(-1, 1) == 0
    assert add_numbers(10, 5) == 15
