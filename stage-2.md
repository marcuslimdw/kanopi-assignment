# How to add new colour spaces

## Backend

1. In `core/data/swatch_type.py`, add a new enum entry corresponding to the name of the new colour space.

2. In `core/data/swatch.py`, add a new subclass `Swatch`. Specify the `swatch_type` you created in step 1, as well as the fields and numeric limits for each field. Note that limits are inclusive.

3. Add appropriate entries to the tests in `core/tests/test_serializers.py`.

## Frontend

1. In `types.d.ts`, add an interface representing the data model of the new colour space. Add the new interface to the union type `SwatchData`.

2. In `components/Swatches/Swatches.tsx`, modify the `resolveSwatchComponent` function to map the incoming `SwatchData` to a `ReactElement` of the appropriate type. This will require some sort of remapping of the new colour space to either RGB or HSL.

