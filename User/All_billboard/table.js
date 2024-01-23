export const dataBill = (item) => {
    return ` <ul class="job-listings mb-3 listBill">
    <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
        <a href="single-bill.html?id=${item._id}"></a>
        <div class="job-listing">
            <img src="${item.gambar}" alt="Image" class="img-fluid rounded-0" style="width: 300px; height: 150px;" />
        </div>

        <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
            <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>${item.nama}</h2>
                <strong>${item.panjang} m x ${item.lebar} m</strong>
            </div>
            <div class="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span class="icon-room">${item.district}, ${item.village}</span> 
            </div>
            <div class="job-listing-meta">
                <span class="badge badge-danger booked">Rp. ${item.harga}</span>
            </div>
            <div class="job-listing-meta mx-4">
                <div class="job-listing-position">
                    <a href="post-adv.html?id=${item._id}" id="booking" class="btn btn-primary flex-grow-1 ml-6" onclick="isBooked()"></a>
                </div>
            </div>
        </div>
    </li>
</ul>
`;
};