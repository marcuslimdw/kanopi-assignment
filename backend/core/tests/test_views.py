import json

from django.test import Client, TestCase
from rest_framework.status import HTTP_200_OK

from core.serializers import SwatchSerializer


class SwatchViewTest(TestCase):
    client = Client()

    def test_can_get_swatches(self):
        response = self.client.get("/api/swatch/")
        assert response.status_code == HTTP_200_OK

        for swatch_json in json.loads(response.content):
            serializer = SwatchSerializer(data=swatch_json)
            serializer.is_valid(raise_exception=True)
