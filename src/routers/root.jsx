import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>简易听歌识曲</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="get">
              <button type="submit">搜索</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`upload`}>上传音乐</Link>
              </li>
              <li>
                <Link to={`recognize`}>听歌识曲</Link>
              </li>
              <li>
                <Link to={`settings`}>设置</Link>
              </li>
              <li>
                <Link to={`/`}>返回首页</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }