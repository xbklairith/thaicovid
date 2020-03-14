from typing import List
from thaicovid_api.adapters.gsheet import open_sheet
from thaicovid_api.models import DayCaseStats


def get_summary_cases() -> List[DayCaseStats]:
    """[summary]
    
    Returns:
        List[DayCaseStats] -- [description]
    """
    cases_summary_sheet = open_sheet("cases-summary")
    records = cases_summary_sheet.get_all_records()
    #  [{'Check': '',
    #   'Confirm': 70,
    #   'Date': '2020/03/12',
    #   'Death': 1,
    #   'PUI': '',
    #   'Recovered': 34
    #   }...]
    result = []
    for record in records:
        rdict = dict(
            date=record.get("Date"),
            confirmed=record.get("Confirmed"),
            death=record.get("Death"),
            recovered=record.get("Recovered"),
            tested=record.get("Tested"),
            pui=record.get("PUI"),
            critical=record.get("Critical"),
        )
        result.append(DayCaseStats(**rdict))
    return result