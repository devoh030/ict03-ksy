package react.oracle.ict03.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import react.oracle.ict03.dto.ProductDTO;
import react.oracle.ict03.service.ProductServiceImpl;

@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/product")
public class ProductController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	
	@Autowired
	private ProductServiceImpl serv;
	
	//http://localhost:8081/product
	@GetMapping
	public List<ProductDTO> productList(HttpServletRequest req, HttpServletResponse res, Model model) 
			throws ServletException, IOException {
		logger.info("<< url - productList >>");
		return serv.listAll();
	}
	
	//insert
	@PostMapping
	public Map<String, Object> productInsert(@RequestBody ProductDTO dto) 
			throws ServletException, IOException {
		logger.info("<< url - productInsert >>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			int insertCnt = serv.insertProduct(dto);
			if(insertCnt == 1) {
				resultCode = "200";
				resultMsg = "productInsert Success";
			}
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		} 
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		
		System.out.println("[ productInsert 성공]");
		return map;
	}
	
	//1건 select (수정을 위한 상세페이지)
	//postman > Get : http://localhost:8081/product/3 
	@GetMapping("/{id}")
	public ProductDTO fetchProductById(@PathVariable int id)
			throws ServletException, IOException {
		logger.info("<< url - fetchProductById >>");
		System.out.println("id:" + id);
		return serv.findById(id);
	}
	
	//update
	@PutMapping("/{id}")
	public Map<String, Object> productUpdate(@PathVariable int id, @RequestBody ProductDTO dto)
			throws ServletException, IOException {
		logger.info("<< url - productUpdate >>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			dto.setId(id);
			int updateCnt = serv.updateProduct(dto);
			if(updateCnt == 1) {
				resultCode = "200";
				resultMsg = "productUpdate Success";
			}
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		} 
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		
		System.out.println("[ productUpdate 성공]");
		return map;
	}
	
	//delete
	@DeleteMapping("/{id}")
	public Map<String, Object> productDelete(@PathVariable int id)
			throws ServletException, IOException {
		logger.info("<< url - productDelete >>");
		
		String resultCode = "";
		String resultMsg = "";
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		try {
			int deleteCnt = serv.deleteProduct(id);
			if(deleteCnt == 1) {
				resultCode = "200";
				resultMsg = "productDelete Success";
			}
		} catch(Exception e) {
			resultCode = "400";
			resultMsg = e.getMessage();
			e.printStackTrace();
		} 
		map.put("resultCode", resultCode);
		map.put("resultMsg", resultMsg);
		
		System.out.println("[ productDelete 성공]");
		return map;
	}

}
