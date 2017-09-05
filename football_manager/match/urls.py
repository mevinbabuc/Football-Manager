from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        regex=r'^$',
        view=views.HomePage.as_view(),
        name='homepage'
    ),
    url(
        regex=r'^team/$',
        view=views.TeamPage.as_view(),
        name='teampage'
    ),
    url(
        regex=r'^fixtures/$',
        view=views.FixturePage.as_view(),
        name='fixturespage'
    ),
    url(
        regex=r'^standings/$',
        view=views.StandingsPage.as_view(),
        name='standingspage'
    ),
]
