from django.urls import path

from core.views import SwatchView

urlpatterns = [
    path("api/swatch/", SwatchView.as_view())
]
