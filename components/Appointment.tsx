export default function AppointmentDetail() {
    return (
        <div className="flex flex-col justify-center align-top bg-slate-200 w-96 max-w-full p-6">
            <h1 className="text-2xl font-semibold">
                Appointment Detail
            </h1>
            <p className="block">---</p>
            <p className="block">Mã hồ sơ:</p>
            <p className="block">Họ và tên:</p>
            <p className="block">Mã CCCD: </p>
            <p className="block">Triệu chứng: </p>
            <p className="block">---</p>
            <p className="block">Họ và tên Bác sĩ:</p>
            <p className="block">Cơ sở khám: </p>
            <p className="block">Khung giờ khám: </p>
        </div>
    )
}