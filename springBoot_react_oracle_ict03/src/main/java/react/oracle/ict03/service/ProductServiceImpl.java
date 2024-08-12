package react.oracle.ict03.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import react.oracle.ict03.dao.ProductMapper;
import react.oracle.ict03.dto.ProductDTO;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductMapper dao;
	
	//상품목록
	@Override
	public List<ProductDTO> listAll() 
			throws ServletException, IOException {
		System.out.println("service - listAll() ");
		
		List<ProductDTO> list = dao.productList();
		System.out.println("list: " + list);
		return list;
	}

	//상품등록
	@Override
	public int insertProduct(ProductDTO dto) 
			throws ServletException, IOException {
		System.out.println("service - insertProduct ");
		
		int insertCnt = dao.insertProduct(dto);
		return insertCnt;
	}

	//상품수정
	@Override
	public int updateProduct(ProductDTO dto) 
			throws ServletException, IOException {
		System.out.println("service - updateProduct ");
		int updateCnt = dao.updateProduct(dto);
		return updateCnt;
	}

	//상품삭제
	@Override
	public int deleteProduct(int id) 
			throws ServletException, IOException {
		int deleteCnt = dao.deleteProduct(id);
		return deleteCnt;
	}

	//상품상세
	@Override
	public ProductDTO findById(int id) 
			throws ServletException, IOException {
		System.out.println("service - findById ");
		
		ProductDTO dto = dao.selectProduct(id);
		return dto;
	}

}
