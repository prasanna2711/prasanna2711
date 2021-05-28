package com.prasanna.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.IntStream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;

import com.prasanna.entity.CurrentExecution;
import com.prasanna.entity.DailyData;
import com.prasanna.entity.LiveServer;
import com.prasanna.entity.Server;
import com.prasanna.entity.TestServer;

@Component
public class DataService {

	public List<TestServer> getBaseLineVersionTestServer() throws IOException {

		List<TestServer> listBooks = new ArrayList<TestServer>();
		FileInputStream inputStream = new FileInputStream(
				new File("C://Users/pkuma/OneDrive/Desktop/DataForScreen.xlsx"));

		Workbook workbook = new XSSFWorkbook(inputStream);
		Sheet firstSheet = workbook.getSheetAt(1);
		Iterator<Row> iterator = firstSheet.iterator();

		while (iterator.hasNext()) {
			Row nextRow = iterator.next();
			Iterator<Cell> cellIterator = nextRow.cellIterator();
			TestServer aBook = new TestServer();

			while (cellIterator.hasNext()) {
				Cell nextCell = cellIterator.next();
				int columnIndex = nextCell.getColumnIndex();

				switch (columnIndex) {
				case 0:
					aBook.setDate((String) getCellValue(nextCell).toString());
					if (!aBook.getDate().contains("Server")) {
						DataFormatter dataFormatter = new DataFormatter();
						String cellStringValue = dataFormatter.formatCellValue(nextCell);
						aBook.setDate(cellStringValue);
					}
					break;
				case 1:
					aBook.setBuildNumber((String) getCellValue(nextCell).toString());
					break;
				case 2:
					aBook.setStatus((String) getCellValue(nextCell));
					break;
				}

			}
			listBooks.add(aBook);
		}

		workbook.close();
		inputStream.close();
		Predicate<TestServer> condition = l -> l.getDate().equalsIgnoreCase("date");

		listBooks.removeIf(condition);
		return listBooks;
	}

	private Object getCellValue(Cell cell) {
		switch (cell.getCellType()) {
		case Cell.CELL_TYPE_STRING:
			return cell.getStringCellValue();

		case Cell.CELL_TYPE_BOOLEAN:
			return cell.getBooleanCellValue();

		case Cell.CELL_TYPE_NUMERIC:
			return cell.getNumericCellValue();
		}

		return null;
	}

	public List<LiveServer> getLiveServerSummary() throws IOException {
		List<LiveServer> listBooks = new ArrayList<LiveServer>();
		FileInputStream inputStream = new FileInputStream(
				new File("C://Users/pkuma/OneDrive/Desktop/DataForScreen.xlsx"));

		Workbook workbook = new XSSFWorkbook(inputStream);
		Sheet firstSheet = workbook.getSheetAt(3);
		Iterator<Row> iterator = firstSheet.iterator();

		while (iterator.hasNext()) {
			Row nextRow = iterator.next();
			Iterator<Cell> cellIterator = nextRow.cellIterator();
			LiveServer aBook = new LiveServer();

			while (cellIterator.hasNext()) {
				Cell nextCell = cellIterator.next();
				int columnIndex = nextCell.getColumnIndex();

				switch (columnIndex) {
				case 0:
					aBook.setDate((String) getCellValue(nextCell).toString());
					if (!aBook.getDate().contains("Server")) {
						DataFormatter dataFormatter = new DataFormatter();
						String cellStringValue = dataFormatter.formatCellValue(nextCell);
						aBook.setDate(cellStringValue);
					}
					break;
				case 1:
					aBook.setInterfaceBuidVersion((String) getCellValue(nextCell).toString());
					break;
				case 2:
					aBook.setStatus((String) getCellValue(nextCell));
					break;
				case 3:
					aBook.setLastCheckIn((String) getCellValue(nextCell).toString());
					break;
				case 4:
					aBook.setInsideCheckIn((String) getCellValue(nextCell).toString());
					break;
				case 5:
					aBook.setTaskName((String) getCellValue(nextCell).toString());
					break;
				case 6:
					aBook.setChangesDone((String) getCellValue(nextCell));
					break;
				case 7:
					aBook.setCodeDone((String) getCellValue(nextCell).toString());
					break;
				case 8:
					aBook.setSummary((String) getCellValue(nextCell).toString());
					break;
				}

			}
			listBooks.add(aBook);
		}

		workbook.close();
		inputStream.close();
		listBooks.remove(0);
		return listBooks;
	}

	public List<TestServer> getTestServerSummary() throws IOException {
		List<TestServer> listBooks = new ArrayList<TestServer>();
		FileInputStream inputStream = new FileInputStream(
				new File("C://Users/pkuma/OneDrive/Desktop/DataForScreen.xlsx"));

		Workbook workbook = new XSSFWorkbook(inputStream);
		Sheet firstSheet = workbook.getSheetAt(2);
		Iterator<Row> iterator = firstSheet.iterator();

		while (iterator.hasNext()) {
			Row nextRow = iterator.next();
			Iterator<Cell> cellIterator = nextRow.cellIterator();
			TestServer aBook = new TestServer();

			while (cellIterator.hasNext()) {
				Cell nextCell = cellIterator.next();
				int columnIndex = nextCell.getColumnIndex();

				switch (columnIndex) {
				case 0:
					aBook.setDate((String) getCellValue(nextCell).toString());
					if (!aBook.getDate().contains("Server")) {
						DataFormatter dataFormatter = new DataFormatter();
						String cellStringValue = dataFormatter.formatCellValue(nextCell);
						aBook.setDate(cellStringValue);
					}
					break;
				case 1:
					aBook.setBuildNumber((String) getCellValue(nextCell).toString());
					break;
				case 2:
					aBook.setStatus((String) getCellValue(nextCell));
					break;
				case 3:
					aBook.setLastCheckIn((String) getCellValue(nextCell).toString());
					break;
				case 4:
					aBook.setTaskName((String) getCellValue(nextCell).toString());
					break;
				case 5:
					aBook.setChangesDone((String) getCellValue(nextCell));
					break;
				case 6:
					aBook.setCodeDone((String) getCellValue(nextCell).toString());
					break;
				case 7:
					aBook.setSummary((String) getCellValue(nextCell).toString());
					break;
				}

			}
			listBooks.add(aBook);
		}

		workbook.close();
		inputStream.close();
		listBooks.remove(0);
		return listBooks;
	}

	public List<Server> getServerStatus() throws IOException {
		List<Server> listBooks = new ArrayList<Server>();
		FileInputStream inputStream = new FileInputStream(
				new File("C://Users/pkuma/OneDrive/Desktop/DataForScreen.xlsx"));

		Workbook workbook = new XSSFWorkbook(inputStream);
		Sheet firstSheet = workbook.getSheetAt(5);
		Iterator<Row> iterator = firstSheet.iterator();

		while (iterator.hasNext()) {
			Row nextRow = iterator.next();
			Iterator<Cell> cellIterator = nextRow.cellIterator();
			Server aBook = new Server();

			while (cellIterator.hasNext()) {
				Cell nextCell = cellIterator.next();
				int columnIndex = nextCell.getColumnIndex();

				switch (columnIndex) {
				case 0:
					aBook.setsNo((String) getCellValue(nextCell).toString());
					break;
				case 1:
					aBook.setServer((String) getCellValue(nextCell).toString());
					break;
				case 2:
					aBook.setStatus((String) getCellValue(nextCell));
					break;
				}

			}
			listBooks.add(aBook);
		}

		workbook.close();
		inputStream.close();
		listBooks.remove(0);
		return listBooks;
	}

	public List<DailyData> getDailyData() throws IOException {
		List<DailyData> listBooks = new ArrayList<DailyData>();
		FileInputStream inputStream = new FileInputStream(
				new File("C://Users/pkuma/OneDrive/Desktop/DataForScreen.xlsx"));

		Workbook workbook = new XSSFWorkbook(inputStream);
		Sheet firstSheet = workbook.getSheetAt(4);
		Iterator<Row> iterator = firstSheet.iterator();

		while (iterator.hasNext()) {
			Row nextRow = iterator.next();
			Iterator<Cell> cellIterator = nextRow.cellIterator();
			DailyData aBook = new DailyData();

			while (cellIterator.hasNext()) {
				Cell nextCell = cellIterator.next();
				int columnIndex = nextCell.getColumnIndex();

				switch (columnIndex) {
				case 0:
					aBook.setDate((String) getCellValue(nextCell).toString());
					if (!aBook.getDate().contains("Server")) {
						DataFormatter dataFormatter = new DataFormatter();
						String cellStringValue = dataFormatter.formatCellValue(nextCell);
						aBook.setDate(cellStringValue);
					}
					break;
				case 1:
					aBook.setMl((String) getCellValue(nextCell).toString());
					break;
				case 2:
					aBook.setTotal((String) getCellValue(nextCell).toString());
					break;
				}

			}
			listBooks.add(aBook);
		}

		workbook.close();
		inputStream.close();
		Predicate<DailyData> condition = l -> (l.getDate() != null && l.getDate().equalsIgnoreCase("date")
				|| l.getDate() == null);

		listBooks.removeIf(condition);
		return listBooks;
	}

	public List<DailyData> getDailyServerData(String type) throws IOException {
		List<DailyData> listBooks = new ArrayList<DailyData>();
		FileInputStream inputStream = new FileInputStream(
				new File("C://Users/pkuma/OneDrive/Desktop/DataForScreen.xlsx"));

		Workbook workbook = new XSSFWorkbook(inputStream);
		Sheet firstSheet = workbook.getSheetAt(4);
		Iterator<Row> iterator = firstSheet.iterator();

		while (iterator.hasNext()) {
			Row nextRow = iterator.next();
			Iterator<Cell> cellIterator = nextRow.cellIterator();
			DailyData aBook = new DailyData();

			while (cellIterator.hasNext()) {
				Cell nextCell = cellIterator.next();
				int columnIndex = nextCell.getColumnIndex();

				switch (columnIndex) {
				case 0:
					aBook.setDate((String) getCellValue(nextCell).toString());
					if (!aBook.getDate().contains("Server")) {
						DataFormatter dataFormatter = new DataFormatter();
						String cellStringValue = dataFormatter.formatCellValue(nextCell);
						aBook.setDate(cellStringValue);
					}
					break;
				case 1:
					aBook.setMl((String) getCellValue(nextCell).toString());
					break;
				case 2:
					aBook.setTotal((String) getCellValue(nextCell).toString());
					break;
				}

			}
			listBooks.add(aBook);
		}

		workbook.close();
		inputStream.close();
		Predicate<DailyData> condition = l -> (l.getDate() != null && l.getDate().equalsIgnoreCase("date")
				|| l.getDate() == null);
		listBooks.removeIf(condition);

		int start = 0;
		int end = 0;
		if (type.equalsIgnoreCase("Test")) {

			start = IntStream.range(0, listBooks.size())
					.filter(userInd -> listBooks.get(userInd).getDate().contains("Live")).findFirst().getAsInt() - 1;
			end = listBooks.size() - 1;

		} else {
			end = IntStream.range(0, listBooks.size())
					.filter(userInd -> listBooks.get(userInd).getDate().contains("Live")).findFirst().getAsInt();
		}
		listBooks.subList(start, end).clear();
		Predicate<DailyData> condition1 = l -> (l.getDate().equalsIgnoreCase("Test Server")
				|| l.getDate().equalsIgnoreCase("Live Server") || l.getDate() == null);
		listBooks.removeIf(condition1);
		return listBooks;
	}

	public List<CurrentExecution> getCurrentReport() throws IOException {
		List<CurrentExecution> listBooks = new ArrayList<CurrentExecution>();
		FileInputStream inputStream = new FileInputStream(
				new File("C://Users/pkuma/OneDrive/Desktop/DataForScreen.xlsx"));

		Workbook workbook = new XSSFWorkbook(inputStream);
		Sheet firstSheet = workbook.getSheetAt(0);
		Iterator<Row> iterator = firstSheet.iterator();

		while (iterator.hasNext()) {
			Row nextRow = iterator.next();
			Iterator<Cell> cellIterator = nextRow.cellIterator();
			CurrentExecution aBook = new CurrentExecution();

			while (cellIterator.hasNext()) {
				Cell nextCell = cellIterator.next();
				int columnIndex = nextCell.getColumnIndex();

				switch (columnIndex) {
				case 0:
					aBook.setTotal((String) getCellValue(nextCell).toString());
					break;
				case 1:
					if (getCellValue(nextCell) != null) {
						aBook.setNewTests((String) getCellValue(nextCell).toString());
					}
					break;
				case 2:
					if (getCellValue(nextCell) != null) {
						aBook.setNewOldTests((String) getCellValue(nextCell).toString());
					}
					break;
				case 3:
					if (getCellValue(nextCell) != null) {
						aBook.setNewInProgress((String) getCellValue(nextCell).toString());
					}
					break;
				case 4:
					if (getCellValue(nextCell) != null) {
						aBook.setNewPassedTests((String) getCellValue(nextCell).toString());
					}
					break;
				case 5:
					if (getCellValue(nextCell) != null) {
						aBook.setNewBrokenTests((String) getCellValue(nextCell).toString());
					}
					break;
				case 6:
					aBook.setNewIgnoredTests((String) getCellValue(nextCell).toString());
					break;
				case 7:
					aBook.setOldTests((String) getCellValue(nextCell).toString());
					break;
				case 8:
					aBook.setOldOldTests((String) getCellValue(nextCell).toString());
					break;
				case 9:
					aBook.setOldInProgress((String) getCellValue(nextCell).toString());
					break;
				case 10:
					aBook.setOldPassedTests((String) getCellValue(nextCell).toString());
					break;
				case 11:
					aBook.setOldBrokenTests((String) getCellValue(nextCell).toString());
					break;

				case 12:
					aBook.setOldIgnoredTests((String) getCellValue(nextCell).toString());
					break;
				case 13:
					aBook.setOwner((String) getCellValue(nextCell).toString());
					break;
				case 14:
					aBook.setTotalNoOfTest((String) getCellValue(nextCell).toString());
					break;

				}
			}
			listBooks.add(aBook);

		}
		workbook.close();
		inputStream.close();
		return listBooks;
	}

}
