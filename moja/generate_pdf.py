import json
from fpdf import FPDF

# Load filteredCourse.json
with open('filteredCourse.json', 'r') as f:
    courses = json.load(f)

# Define headers and column widths
headers = ["CourseCode", "ShortName", "SectionName", "TimeSlotName", "RoomCode", "SeatCapacity"]
col_widths = [30, 30, 40, 50, 30, 30]

# Create PDF class with table
class PDF(FPDF):
    def header(self):
        self.set_font("Helvetica", "B", 16)
        self.set_text_color(0)
        self.cell(0, 10, "Filtered Course List", ln=1, align="C")
        self.ln(4)

    def table(self, data):
        # Header
        self.set_fill_color(76, 175, 80)  # Green
        self.set_text_color(255)
        self.set_font("Helvetica", "B", 11)
        for i, header in enumerate(headers):
            self.cell(col_widths[i], 10, header, border=1, align='C', fill=True)
        self.ln()

        # Rows
        self.set_font("Helvetica", "", 10)
        for i, row in enumerate(data):
            fill = i % 2 == 0
            self.set_fill_color(249, 249, 249) if fill else self.set_fill_color(255, 255, 255)
            self.set_text_color(0)
            for j, key in enumerate(headers):
                text = str(row.get(key, ''))
                self.cell(col_widths[j], 8, text, border=1, fill=fill)
            self.ln()

# Create PDF
pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.table(courses)
pdf.output("filteredCourse.pdf")

print("PDF created: filteredCourse.pdf")
