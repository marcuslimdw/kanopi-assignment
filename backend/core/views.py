import random

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from core.data.swatch import Swatch
from core.serializers import SwatchSerializer

SWATCH_COUNT = 5


class SwatchView(APIView):

    def get(self, request: Request) -> Response:
        classes = random.choices(list(Swatch.subclasses().values()), k=SWATCH_COUNT)
        swatches = [cls.random_instance() for cls in classes]
        serialized = SwatchSerializer(instance=swatches, many=True).data
        return Response(serialized)
