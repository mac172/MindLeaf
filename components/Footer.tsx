const data = [
    "Learn",
    "Course",
    "About Us",
    "Contact"
]

export default function Footer() {
    return (
        <div className="border-t-4/25 p-10 ">
            <ul className="flex justify-center">
                {
                    data.map((item,index) => (
                        <li key={index} className="text-lg p-4 m-4">{item}</li>
                    ))
                }
            </ul>
            <p className="text-center text-2xl">MindLeaf</p>
        </div>
    )
}