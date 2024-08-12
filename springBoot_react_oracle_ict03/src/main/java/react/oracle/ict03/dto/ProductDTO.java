package react.oracle.ict03.dto;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="mvc_product_tbl")
public class ProductDTO {
	
	private int id;
	private String name;
	private String brand;
	private String madein;
	private int price;
	
	// @GeneratedValue(strategy=GenerationType.IDENTITY)  // PK(id)를 AUTO_INCREMENT로 생성한 경우
	@Id
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBrand() {
		return brand;
	}	
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getMadein() {
		return madein;
	}
	public void setMadein(String madein) {
		this.madein = madein;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	@Override
	public String toString() {
		return "ProductDTO [id=" + id + ", name=" + name + ", brand=" + brand + ", madein=" + madein + ", price="
				+ price + "]";
	}
	
	
}
