package com.prasanna.excel;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.prasanna.entity.CurrentExecution;
import com.prasanna.entity.DailyData;
import com.prasanna.entity.LiveServer;
import com.prasanna.entity.Server;
import com.prasanna.entity.TestServer;
import com.prasanna.service.DataService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class HomeController {

	@Autowired
	DataService service;

	/*
	 * @CrossOrigin(origins = "http://localhost:8080")
	 */ @RequestMapping(value = "/getBaseLineVersionTestServer", method = RequestMethod.GET)
	public @ResponseBody List<TestServer> getBaseLineVersionTestServer() throws IOException {
		return service.getBaseLineVersionTestServer();
	}

	@RequestMapping(value = "/getLiveServerSummary", method = RequestMethod.GET)
	public @ResponseBody List<LiveServer> getLiveServerSummary() throws IOException {
		return service.getLiveServerSummary();
	}

	@RequestMapping(value = "/getTestServerSummary", method = RequestMethod.GET)
	public @ResponseBody List<TestServer> getTestServerSummary() throws IOException {
		return service.getTestServerSummary();
	}

	@RequestMapping(value = "/getServerStatus", method = RequestMethod.GET)
	public @ResponseBody List<Server> getServerStatus() throws IOException {
		return service.getServerStatus();
	}

	@RequestMapping(value = "/getDailyData", method = RequestMethod.GET)
	public @ResponseBody List<DailyData> getDailyData() throws IOException {
		return service.getDailyData();
	}

	@RequestMapping(value = "/getDailyServerData", method = RequestMethod.GET)
	public @ResponseBody List<DailyData> getDailyServerData(@RequestParam("type") String type) throws IOException {
		return service.getDailyServerData(type);
	}

	@RequestMapping(value = "/getCurrentReport", method = RequestMethod.GET)
	public @ResponseBody List<CurrentExecution> getCurrentReport() throws IOException {
		return service.getCurrentReport();
	}
}
