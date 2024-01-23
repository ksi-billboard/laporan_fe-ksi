export const singleBill = `
<div class="row">
  <div class="col-lg-12">
    <div class="mb-5">
      <img src="#GAMBAR#" alt="Image" class="img-fluid rounded-0" style="width: 500px; height: 250px;" />
      
    </div>
  </div>
  <div class="col-lg-6">
    <div class="mb-5">
        <div class="bg-light p-3 border rounded mb-4">
            <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Detail Billboard</h3>
            <ul class="list-unstyled pl-3 mb-0">
              <li class="mb-2"><strong class="text-black">Kode : </strong> #KODE# </li>
              <li class="mb-2"><strong class="text-black">Nama : </strong> #NAMA# </li>
              <li class="mb-2"><strong class="text-black">Ukuran : </strong> #PANJANG# m x #LEBAR# m </li>
              <li class="mb-2"><strong class="text-black">Harga : </strong> Rp. #HARGA# </li>
              <br>
            </ul>
        </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="mb-5">
        <div class="bg-light p-3 border rounded mb-4">
            <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Lokasi Billboard</h3>
            <ul class="list-unstyled pl-3 mb-0">
              <li class="mb-2"><strong class="text-black">Kab./Kota: </strong> #REGENCY# </li>
              <li class="mb-2"><strong class="text-black">Kecamatan : </strong> #DISTRICT# </li>
              <li class="mb-2"><strong class="text-black">Kelurahan : </strong> #VILLAGE# </li>
              <li class="mb-2"><strong class="text-black">Alamat : </strong> #ADDRESS# </li>
              <li class="mb-2"><strong class="text-black">Titik Pusat : </strong> #LATITUDE#, #LONGITUDE# </li>
            </ul>
        </div>
    </div>
  </div>

  <div class="ml-3">
    <a href="list-bill.html" class="btn btn-primary">Kembali</a>
  </div>

</div>
`;