import "../../styles/Product.css"
 

const produk = [
    {
      nama: 'Velg Racing Ring 17',
      harga: 'Rp 3.500.000',
      gambar: 'https://via.placeholder.com/200'
    },
    {
      nama: 'Velg OEM Ring 16',
      harga: 'Rp 2.900.000',
      gambar: 'https://via.placeholder.com/200'
    },
    {
      nama: 'Velg Custom Ring 18',
      harga: 'Rp 4.200.000',
      gambar: 'https://via.placeholder.com/200'
    },
    {
        nama: 'Velg Racing Ring 17',
        harga: 'Rp 3.500.000',
        gambar: 'https://via.placeholder.com/200'
    },
    {
        nama: 'Velg OEM Ring 16',
        harga: 'Rp 2.900.000',
        gambar: 'https://via.placeholder.com/200'
    },
    {
        nama: 'Velg Custom Ring 18',
        harga: 'Rp 4.200.000',
        gambar: 'https://via.placeholder.com/200'
    },
    {
        nama: 'Velg OEM Ring 16',
        harga: 'Rp 2.900.000',
        gambar: 'https://via.placeholder.com/200'
    },
    {
        nama: 'Velg Custom Ring 18',
        harga: 'Rp 4.200.000',
        gambar: 'https://via.placeholder.com/200'
    },
    {
        nama: 'Velg OEM Ring 16',
        harga: 'Rp 2.900.000',
        gambar: 'https://via.placeholder.com/200'
    },
    {
        nama: 'Velg Custom Ring 18',
        harga: 'Rp 4.200.000',
        gambar: 'https://via.placeholder.com/200'
    }
  ];

  
const ProductListPage = () =>{
    return (
        <section className="products">
          <h2>Produk Unggulan</h2>
          <div className="product-grid">
            {produk.map((item, index) => (
              <div key={index} className="product-card">
                <img src={item.gambar} alt={item.nama} />
                <h3>{item.nama}</h3>
                <p>{item.harga}</p>
              </div>
            ))}
          </div>
        </section>
    );
}

export default ProductListPage
  