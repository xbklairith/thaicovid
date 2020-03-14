from dataclasses import dataclass


@dataclass
class DayCaseStats:
    date: str
    confirmed: int
    death: int
    recovered: int
    tested: int
    pui: int
    critical: int
    

