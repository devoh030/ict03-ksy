package react.oracle.ict03.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;

import react.oracle.ict03.dto.ProductDTO;

public interface ProductService {
	
	//상품목록
	public List<ProductDTO> listAll()
		throws ServletException, IOException;
	
	//상품등록
	public int insertProduct(ProductDTO dto)
			throws ServletException, IOException;

	//상품수정
	public int updateProduct(ProductDTO dto)
			throws ServletException, IOException;
	
	//상품삭제
	public int deleteProduct(int id)
			throws ServletException, IOException;
	
	//상품상세
	public ProductDTO findById(int id)
			throws ServletException, IOException;
}
