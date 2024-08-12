package react.oracle.ict03.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import react.oracle.ict03.dto.ProductDTO;

@Mapper //daoImpl 작성하지 않아도 mapper 호출가능
public interface ProductMapper {

	//상품목록
	public List<ProductDTO> productList();
	
	//상품등록
	public int insertProduct(ProductDTO dto);
	
	//상품수정
	public int updateProduct(ProductDTO dto);
	
	//상품삭제
	public int deleteProduct(int id);
	
	//상품상세
	public ProductDTO selectProduct(int id);
}
