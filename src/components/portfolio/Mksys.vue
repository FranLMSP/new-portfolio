<template>

    <div class="w-full">

        <p>
            &emsp; A Management System for the <b>Mister Kombi</b> restaurant.
            In this system, you can keep control of everything on your restaurant.
            For example, credit payments from the clients, the products that you import or sell,
            the system settings, user roles, do sellings, get notifications, manage the
            payments of the employees, etc.<br>
            The system also has a small Command Line CLI to update the migrations and refresh
            the users permissions and modules.
        </p>

        <hr class="m-4">

        <div class="flex flex-wrap mb-6">

            <div class="w-full md:w-1/2">

                <p>Tools used:</p>

                <br>
                <ul class="list-disc pl-8">
                    <li><strong>For the backend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>Codeigniter</li>
                        <li>Mariadb</li>
                        <li>PhpSpreadSheet library for excel exports</li>
                        <li>MPDF library for PDF exports</li>
                    </ul>
                    <li><strong>For the frontend:</strong></li>
                    <ul class="list-disc pl-8">
                        <li>jQuery</li>
                        <li>Highcharts</li>
                        <li>Bootstrap</li>
                        <li>Data Tables</li>
                        <li>AdminLTE</li>
                        <li>SweetAlert</li>
                        <li>Select2</li>
                        <li>Bootstrap</li>
                    </ul>
                </ul>
            </div>

            <div class="w-full md:w-1/2">
                <img
                    @click="openImage(require('@/assets/img/portfolio/mksys/home.png'), '')"
                    class="cursor-pointer m-auto mb-4"
                    src="@/assets/img/portfolio/mksys/home.png"
                />
            </div>

        </div>
        <div class="flex flex-wrap">
            <img
                @click="openImage(require('@/assets/img/portfolio/mksys/orders_index.png'), '')"
                class="cursor-pointer md:w-1/3 h-auto w-full p-2"
                src="@/assets/img/portfolio/mksys/orders_index.png"
            />
            <img
                @click="openImage(require('@/assets/img/portfolio/mksys/order.png'), '')"
                class="cursor-pointer md:w-1/3 h-auto w-full p-2"
                src="@/assets/img/portfolio/mksys/order.png"
            />
            <img
                @click="openImage(require('@/assets/img/portfolio/mksys/sellings_report.png'), '')"
                class="cursor-pointer md:w-1/3 h-auto w-full p-2"
                src="@/assets/img/portfolio/mksys/sellings_report.png"
            />
        </div>

    </div>

</template>


<script>

export default {
    name: 'Mksys',
    props: ['openImage']
}

</script>
