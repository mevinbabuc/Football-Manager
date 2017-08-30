from django.views.generic import TemplateView
from . models import Match, Team, Sponsor


class HomePage(TemplateView):
    template_name = 'match/index.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)

        context['match'] = Match.objects.all()
        context['sponsors'] = Sponsor.objects.all()

        return context


class TeamPage(TemplateView):
    template_name = 'match/team.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)

        context['teams'] = Team.objects.all()

        return context


