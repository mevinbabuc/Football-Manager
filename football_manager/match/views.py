from django.views.generic import TemplateView
from . models import Match, Team, Sponsor, Group, Rule, Standings


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

        buckets = list()
        team_queryset = Team.objects.all()

        bucket_counter = 0
        for team in team_queryset:

            if len(buckets) == 0:
                buckets.append([team])
            elif len(buckets[bucket_counter]) >= 4:
                buckets.append([team])
                bucket_counter += 1
            else:
                buckets[bucket_counter].append(team)

        context['buckets'] = buckets
        return context


class FixturePage(TemplateView):
    template_name = 'match/fixtures.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)

        match_queryset = Match.objects.all()

        buckets = dict()
        for match in match_queryset:
            match_date = match.match_date.date()

            if match_date not in buckets:
                buckets[match_date] = list()

            buckets[match_date].append(match)

        context['fixtures'] = buckets
        return context


class StandingsPage(TemplateView):
    template_name = 'match/standings.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)

        context['standings'] = Standings.objects.all()
        return context


class RulesPage(TemplateView):
    template_name = 'match/rules.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)

        context['rules'] = Rule.objects.all()
        return context
