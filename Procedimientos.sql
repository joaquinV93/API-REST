
delimiter $$
CREATE  PROCEDURE AgregarProducto(
	IN nombre VARCHAR(90),
	IN brand_ VARCHAR(80)
)
BEGIN 	 	
	
	SET @created_at_=now();	
	SET  @idp=(select MAX(id) FROM products)+1;
	SET @nombre=nombre;
	SET @brand_=brand_;
	INSERT INTO products (id,name,brand,created_at)VALUES(@idp,@nombre,@brand_,@created_at_);
	
END;
$$


delimiter $$
CREATE  PROCEDURE UpdateProducto(
	IN id_ INTEGER,
	IN name_ VARCHAR(90),
	IN brand_ VARCHAR(80)
)
BEGIN 	 	
	
	SET @update_at_=now();	
	SET  @idp=id_;
	SET @nombre=name_;
	SET @brand_=brand_;
	update products  set NAME=@nombre,brand=@brand_,updated_at=@update_at_ WHERE id=@idp;
	
END;
$$


delimiter $$
CREATE  PROCEDURE DestroyProducto(
	IN id_ INTEGER
)
BEGIN 	 	
	
		
	SET  @idp=id_;
	DELETE from products  WHERE id=@idp;
	
END;
$$
