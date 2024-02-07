export const tableSewaBayar = `
<ul class="job-listings mb-3" style="background-color: #FFC0CB;">
    <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
        <a href="single-sewa.html?id=#ID#"></a>
        <div class="job-listing">
            <img src="#GAMBAR#" alt="Image" class="img-fluid rounded-0" style="width: 300px; height: 150px;" />
        </div>

        <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
            <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2><b>Tanggal Mulai : </b> #MULAI#</h2>
                <h2><b>Tanggal Selesai : </b> #SELESAI#</h2> 
            </div>
            <div class="job-listing-meta">
                <span class="badge badge-danger paid" style="font-size: 20px; font-style: italic;">PAID</span>
            </div>
            <div class="job-listing-meta mx-4">
                <div class="job-listing-position">
                </div>
            </div>
        </div>
    </li>
</ul>
`;