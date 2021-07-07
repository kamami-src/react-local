import { VFC } from "react"
import { Link } from "react-router-dom"

export const Page404: VFC = () => {
    return (
        <div>
            <h1>ページが見つかりません</h1>
            <Link to="/">TOPへ</Link>
        </div>
    )
}