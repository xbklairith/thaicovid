import gspread
from oauth2client.service_account import ServiceAccountCredentials
from thaicovid_api.settings import GOOGLE_SERVICE_KEY_DICT

def build_api_credentials():
    scope = [
        "https://spreadsheets.google.com/feeds",
        "https://www.googleapis.com/auth/drive",
    ]
    creds = ServiceAccountCredentials.from_json_keyfile_dict(
        GOOGLE_SERVICE_KEY_DICT, scope
    )
    return creds


def create_client(creds):
    client = gspread.authorize(creds)
    return client

_client = create_client(build_api_credentials())

def open_gsheet_by_key(key="1-GKTbFKKVrnbsmt2rBxhOAt7b1MFwkognz7xe2abqJQ"):
    sheets = _client.open_by_key(key)
    return sheets

def open_sheet(sheet_name):
    sheets = open_gsheet_by_key()
    cases_summary = sheets.worksheet(sheet_name)
    return cases_summary
