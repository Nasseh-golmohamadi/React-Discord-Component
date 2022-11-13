import { Information } from "./Information";
import OfflineSec from "./OfflineSec";
import OnlineSec from "./OnlineSec";
import TextChanel from "./TextChanel";

export default function Main() {
  return (
    <main className="base">
      <aside className="">
        <div className="top">
          <h3>
            Frontend BootCamp (14) <i className="fa-solid fa-angle-down"></i>
          </h3>
        </div>
        <div className="center">
          <nav>
            <div>
              <i className="fa-solid fa-angle-down"></i>
              <h4>
                <a href="#">INFORMATION</a>
              </h4>
            </div>

            <Information />
          </nav>
          <nav>
            <div>
              <i className="fa-solid fa-angle-down"></i>
              <h4>
                <a href="#">TEXT CHANNELS</a>
              </h4>
            </div>

            <TextChanel />
          </nav>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              src="./src/assets/img/photo_2022-05-26_07-45-46.jpg"
              alt=""
              width="35px"
              height="35px"
            />
            <div>
              <h5>Nasseh</h5>
              <p>#1264</p>
            </div>
          </div>
          <div className="right">
            <i className="fa-solid fa-microphone"></i>
            <i className="fa-solid fa-headphones"></i>
            <i className="fa-solid fa-gear"></i>
          </div>
        </div>
      </aside>

      <section className="chat">
        <header>
          <nav>
            <div>
              <i className="fa-solid fa-hashtag"></i>
              <h4>قوانین</h4>
              <div className="horizental"></div>
              <p>قوانین فعالیت در این گروه</p>
            </div>
            <div>
              <i className="fa-solid fa-bars"></i>
            </div>
          </nav>
          <nav>
            <i className="fa-solid fa-hashtag"></i>
            <i className="fa-regular fa-bell"></i>
            <i className="fa-solid fa-user-group"></i>
            <div className="relative">
              <input type="text" placeholder="Search" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <section>
              <i className="fa-solid fa-inbox"></i>
              <i className="fa-solid fa-circle-question"></i>
            </section>
          </nav>
        </header>
        <article>
          <div className="right">
            <div className="top-right">
              <h1>Welcome to</h1>
              <h1>Frontend Bootcamp (14)</h1>
              <p>This is beginning of this server</p>
            </div>
            <section>
              <div className="border-top-bottom">
                <span>July 20,2022</span>
                <div className="path">
                  <div className="seperate">
                    <img src="./src/assets/img/moein.jpg" alt="" />
                    <div className="column">
                      <p>
                        <p className="moein">
                          Moein
                          <i>07/20/2022</i>
                        </p>
                      </p>
                      <p>
                        <i>(edited)</i>
                        <p>به بوتکمپ Frontend 14 مپصا خوش آمدید</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-top-bottom down">
                <span>July 20,2022</span>
                <div className="path">
                  <div className="seperate">
                    <img
                      src="./src/assets/img/moein.jpg"
                      width="50px"
                      height="50px"
                      alt=""
                    />
                    <div className="column">
                      <p>
                        <p className="moein">
                          Moein
                          <i>07/20/2022</i>
                        </p>
                      </p>
                      <p>
                        <i>(edited)</i>
                        <p>به بوتکمپ Frontend 14 مپصا خوش آمدید</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="opacity">
                <div>
                  <i className="fa-solid fa-circle-plus"></i>
                  <p>
                    You do not have permission to send messages in this chennel.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <nav className="users">
            <section className="online">
              <p>ONLINE -- 3</p>
              <OnlineSec />
            </section>

            <section className="offline">
              <p>OFFLINE -- 15</p>
              <OfflineSec />
            </section>
          </nav>
        </article>
      </section>
    </main>
  );
}
