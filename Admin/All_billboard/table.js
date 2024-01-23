export const tableBill = `
<ul class="job-listings mb-3">
  <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
    <a href="single-billboard.html?id=#ID#"></a>
    <div class="job-listing">
      <img src="#GAMBAR#" class="img-fluid rounded-0" style="width: 300px; height: 150px;"/>
    </div>

    <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
      <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
        <h2>#NAMA#</h2>
        <strong>#PANJANG# m x #LEBAR# m</strong>
      </div>
      <div class="job-listing-meta">
        <span class="badge badge-danger">Rp. #HARGA#</span>
      </div>
      <div class="job-listing-meta mx-4">
        <div class="job-listing-position">
          <a href="edit-billboard.html?id=#IDEDIT#" class="btn btn-warning flex-grow-1 ml-6" data-bill-id="#IDHAPUS#"></a>
          <a href="#" type="button" class="btn btn-danger flex-grow-1 ml-4" onclick="deleteBill('#HAPUS#')"></a>
        </div>
      </div>
    </div>
  </li>
</ul>
`;