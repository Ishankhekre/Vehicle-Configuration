package com.example.services;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.dto.InvoiceDTO;
import com.itextpdf.io.font.constants.StandardFonts;
import com.itextpdf.kernel.colors.ColorConstants;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.canvas.draw.DashedLine;
import com.itextpdf.kernel.pdf.canvas.draw.SolidLine;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.*;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.properties.UnitValue;
import com.itextpdf.layout.borders.Border;
import com.itextpdf.layout.borders.SolidBorder;

@Service
public class InvoicePdfManagerImpl implements InvoicePdfManager {

    @Override
    public void invoicePdf(InvoiceDTO invoicedetail) throws IOException {
    	String pdfName = invoicedetail.getInvoiceNumber();
        String path = pdfName + ".pdf";

        PdfWriter pdfWriter = new PdfWriter(new File(path));
        PdfDocument pdfDocument = new PdfDocument(pdfWriter);
        pdfDocument.setDefaultPageSize(PageSize.A4);
        Document document = new Document(pdfDocument);

        PdfFont boldFont = PdfFontFactory.createFont(StandardFonts.HELVETICA_BOLD);
        PdfFont regularFont = PdfFontFactory.createFont(StandardFonts.HELVETICA);

        String currentDate = new SimpleDateFormat("dd-MM-yyyy").format(new Date());

        // **Header**
        Paragraph header = new Paragraph("INVOICE")
                .setFontSize(30)
                .setFont(boldFont)
                .setFontColor(ColorConstants.DARK_GRAY)
                .setTextAlignment(TextAlignment.CENTER)
                .setMarginBottom(10);
        document.add(header);
        document.add(new LineSeparator(new SolidLine()));

        Paragraph invoiceInfo = new Paragraph("Invoice Number: " + invoicedetail.getInvoiceNumber() + "\nDate: " + currentDate)
                .setFont(regularFont)
                .setTextAlignment(TextAlignment.CENTER)
                .setMarginBottom(20);
        document.add(invoiceInfo);

        // **Company & Client Details**
        Table detailsTable = new Table(new float[]{1, 1});
        detailsTable.setWidth(UnitValue.createPercentValue(100));

        detailsTable.addCell(new Cell().add(new Paragraph("" +
                invoicedetail.getUser().getCompanyName() + "\nGST: " + invoicedetail.getUser().getGstNumber() +
                "\n📞 " + invoicedetail.getUser().getContactNumber() + "\n📧 " + invoicedetail.getUser().getEmail()))
                .setFont(regularFont)
                .setBorder(Border.NO_BORDER));

        detailsTable.addCell(new Cell().add(new Paragraph("Issued By:\nVConfig Solutions\n📞 9876548765\n📧 VConfig@gmail.com"))
                .setFont(regularFont)
                .setBorder(Border.NO_BORDER)
                .setTextAlignment(TextAlignment.RIGHT));
        
        document.add(detailsTable);
        document.add(new Paragraph("\n"));
        document.add(new LineSeparator(new DashedLine()));

        // **Car and Components**
        Paragraph carDetails = new Paragraph("Car: " + invoicedetail.getManufacturer() + " " + invoicedetail.getModelName())
                .setFont(boldFont).setMarginBottom(5).setFontSize(14);
        document.add(carDetails);

        Table componentTable = new Table(new float[]{1});
        componentTable.setWidth(UnitValue.createPercentValue(100));
        componentTable.addHeaderCell(new Cell().add(new Paragraph("Purchased Components"))
                .setBackgroundColor(ColorConstants.LIGHT_GRAY)
                .setFont(boldFont)
                .setTextAlignment(TextAlignment.CENTER));
        for (String component : invoicedetail.getComponents()) {
            componentTable.addCell(new Cell().add(new Paragraph(component)).setFont(regularFont).setTextAlignment(TextAlignment.LEFT));
        }
        document.add(componentTable);
        document.add(new Paragraph("\n"));

        // **Total Summary**
        Table totalTable = new Table(new float[]{3, 1});
        totalTable.setWidth(UnitValue.createPercentValue(100));

        totalTable.addCell(new Cell().add(new Paragraph("Base Price:"))
                .setFont(regularFont).setBorder(Border.NO_BORDER));
        totalTable.addCell(new Cell().add(new Paragraph("₹" + String.format("%.2f", invoicedetail.getBasePrice())))
                .setFont(regularFont).setTextAlignment(TextAlignment.RIGHT).setBorder(Border.NO_BORDER));

        totalTable.addCell(new Cell().add(new Paragraph("GST (18%):"))
                .setFont(regularFont).setBorder(Border.NO_BORDER));
        totalTable.addCell(new Cell().add(new Paragraph("₹" + String.format("%.2f", invoicedetail.getTax())))
                .setFont(regularFont).setTextAlignment(TextAlignment.RIGHT).setBorder(Border.NO_BORDER));

        totalTable.addCell(new Cell().add(new Paragraph("Total Price (Incl. GST):"))
                .setFont(boldFont).setBorder(Border.NO_BORDER));
        totalTable.addCell(new Cell().add(new Paragraph("₹" + String.format("%.2f", invoicedetail.getTotalPrice())))
                .setFont(boldFont).setTextAlignment(TextAlignment.RIGHT).setBorder(Border.NO_BORDER).setFontColor(ColorConstants.RED));

        totalTable.addCell(new Cell().add(new Paragraph("Quantity Purchased:"))
                .setFont(regularFont).setBorder(Border.NO_BORDER));
        totalTable.addCell(new Cell().add(new Paragraph(String.valueOf(invoicedetail.getQuantity())))
                .setFont(regularFont).setTextAlignment(TextAlignment.RIGHT).setBorder(Border.NO_BORDER));

        totalTable.addCell(new Cell().add(new Paragraph("Final Total Price:"))
                .setFont(boldFont).setBorder(Border.NO_BORDER));
        totalTable.addCell(new Cell().add(new Paragraph("₹" + String.format("%.2f", invoicedetail.getFinalTotalPrice())))
                .setFont(boldFont).setTextAlignment(TextAlignment.RIGHT).setBorder(Border.NO_BORDER).setFontColor(ColorConstants.RED));

        document.add(totalTable);
        document.add(new LineSeparator(new SolidLine()));

        // **Footer**
        document.add(new Paragraph("\nThank you for your business! 😊\nVConfig Solutions")
                .setTextAlignment(TextAlignment.CENTER)
                .setFontSize(12)
                .setFont(regularFont)
                .setFontColor(ColorConstants.GRAY)
                .setMarginTop(20));

        document.close();
        System.out.println("✅ Invoice PDF Created: " + path);
    }
}
