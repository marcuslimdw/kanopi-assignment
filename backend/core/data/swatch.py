from __future__ import annotations

import random
from typing import Mapping, Type

from core.data.swatch_type import SwatchType

FieldLimits = tuple[int, int]
FieldData = Mapping[str, int]


class Swatch:
    swatch_type: SwatchType
    fields: list[str]
    field_limits: Mapping[str, FieldLimits]

    _subclasses: dict[SwatchType, Type[Swatch]] = {}

    def __init__(self, field_data: FieldData):
        self.field_data = field_data

    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        Swatch._subclasses[cls.swatch_type] = cls

    def __eq__(self, other):
        return self.swatch_type == other.swatch_type and self.field_data == other.field_data

    def __str__(self):
        return self.__repr__()

    def __repr__(self):
        return f'{self.swatch_type.value}Swatch({self.field_data})'

    @classmethod
    def random_instance(cls) -> Swatch:
        field_data = {field: random.randint(*cls.field_limits[field]) for field in cls.fields}
        return cls(field_data)

    @classmethod
    def subclasses(cls) -> dict[SwatchType, Type[Swatch]]:
        return cls._subclasses.copy()


class RGBSwatch(Swatch):
    swatch_type = SwatchType.RGB
    fields = ['red', 'green', 'blue']
    field_limits = {'red': (0, 255), 'green': (0, 255), 'blue': (0, 255)}


class HSLSwatch(Swatch):
    swatch_type = SwatchType.HSL
    fields = ['hue', 'saturation', 'luminosity']
    field_limits = {'hue': (0, 360), 'saturation': (0, 100), 'luminosity': (0, 100)}
