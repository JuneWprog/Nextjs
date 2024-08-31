import Link from 'next/link';
export default function F1() {
    return (
        <div>
            <h1>Intercepting Route</h1>
            <h2>F1</h2>
            <p>This is an example intercepting route</p>
            <p> url: /f1</p>
            <p> This page intercept by (.)f2 click the link to f2</p>
            <Link href="/f1/f2" className='underline'> Go To F2 </Link>
        </div>
    )
}