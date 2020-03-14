from typing import List

from thaicovid_api.repositories import get_summary_cases
from thaicovid_api.models import DayCaseStats


def _extract_series(data: List[DayCaseStats], series_key) -> List[dict]:
    return [
        {f"{day_stats.date}": getattr(day_stats, series_key)} for day_stats in data
    ]


def _render_by_series(data: List[DayCaseStats]) -> dict:
    confirmed_series = _extract_series(data, 'confirmed')
    death_series = _extract_series(data, 'death')
    recovered_series = _extract_series(data, 'recovered')
    tested_series = _extract_series(data, 'tested')
    pui_series = _extract_series(data, 'pui')
    critical_series = _extract_series(data, 'critical')
    
    return dict(
        confirmed=confirmed_series,
        death=death_series,
        recovered=recovered_series,
        tested=tested_series,
        pui=pui_series,
        critical=critical_series
    )


def show_summary_by_series():
    data = get_summary_cases()
    result = _render_by_series(data)
    return result
