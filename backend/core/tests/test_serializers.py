import pytest

from core.data import HSLSwatch, RGBSwatch
from core.serializers import SwatchSerializer


@pytest.mark.parametrize(['instance', 'expected'], [
    (
        RGBSwatch({'red': 0, 'green': 128, 'blue': 255}),
        {'swatch_type': 'RGB', 'red': 0, 'green': 128, 'blue': 255}),
    (
        HSLSwatch({'hue': 360, 'saturation': 50, 'luminosity': 25}),
        {'swatch_type': 'HSL', 'hue': 360, 'saturation': 50, 'luminosity': 25}
    )
])
def test_can_serialize(instance, expected):
    serializer = SwatchSerializer(instance=instance)
    assert serializer.data == expected


@pytest.mark.parametrize(['data', 'expected'], [
    (
        {'swatch_type': 'RGB', 'red': 0, 'green': 128, 'blue': 255},
        RGBSwatch({'red': 0, 'green': 128, 'blue': 255})),
    (
        {'swatch_type': 'HSL', 'hue': 360, 'saturation': 50, 'luminosity': 25},
        HSLSwatch({'hue': 360, 'saturation': 50, 'luminosity': 25})
    )
])
def test_can_deserialize_valid(data, expected):
    serializer = SwatchSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    assert serializer.validated_data == expected


@pytest.mark.parametrize(['data'], [
    ({'swatch_type': 'RGB', 'red': 0, 'green': 128, 'blue': 2550},),
    ({'swatch_type': 'HSL', 'hue': 360, 'saturation': 50, 'luminosity': 250},),
    ({'swatch_type': 'HSL', 'red': 0, 'green': 128, 'blue': 2550},),
    ({'swatch_type': 'RGB', 'hue': 360, 'saturation': 50, 'luminosity': 250},)
])
def test_cannot_deserialize_invalid(data):
    serializer = SwatchSerializer(data=data)
    assert not serializer.is_valid()
