from typing import Dict

from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from core.data.swatch import Swatch
from core.data.swatch_type import SwatchType


class SwatchSerializer(serializers.Serializer):

    def to_representation(self, instance: Swatch):
        return {'swatch_type': instance.swatch_type.value, **instance.field_data}

    def to_internal_value(self, data: Dict[str, int]):
        swatch_type = SwatchType(data['swatch_type'])
        swatch_class = Swatch.subclasses()[swatch_type]
        for field, (low, high) in swatch_class.field_limits.items():
            try:
                field_value = data[field]

            except KeyError:
                raise ValidationError(f"Field '{field}' was missing from data.")

            if low > field_value or field_value > high:
                raise ValidationError(f"Field value '{field}' ({field_value}) was outside "
                                      f"permitted range {(low, high)}.")

        return swatch_class({k: v for k, v in data.items() if k != 'swatch_type'})
