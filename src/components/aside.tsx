import '../globals.css';

export default function Aside() {
  return (
    <aside
      className="v-navigation-drawer v-navigation-drawer--absolute v-navigation-drawer--close v-navigation-drawer--is-mobile v-navigation-drawer--right v-navigation-drawer--temporary theme--light"
      style={{
        height: "100%",
        top: 0,
        transform: "translateX(100%)",
        width: "80%",
      }}
      
      
    >
      <div className="v-navigation-drawer__content">
        <div className="menu" >
          <div className="user-profile" >
            <a
              href="/account"
              className="user-mobile"
              style={{ display: "none" }}
              
            >
              <p >حساب کاربری من</p>
              <span  />
            </a>
            <button
              type="button"
              // loadingcolor="primary"
              className="v-btn v-btn--text theme--light v-size--default"
              style={{
                color: "#00843E",
                caretColor: "#00843E",
              }}
              
              
            >
              <span className="v-btn__content">
                ورود <span className="login-splitter"  />{" "}
                ثبت‌نام
              </span>
            </button>
          </div>
          <div className="divider-line my-2"  />
          <div style={{ display: "none" }} >
            <a href="/user/topup" >
              <div className="menu-item pb-3" >
                <div
                  className="d-flex justify-space-between align-center"
                  
                >
                  <div className="d-flex align-center" >
                    <p className="mb-0" >
                      {" "}
                      افزایش اعتبار کیف پول{" "}
                    </p>
                  </div>
                </div>
                <div className="details" >
                  {" "}
                  اعتبار فعلی: <span > 0 تومان </span>
                </div>
              </div>
            </a>
            <a
              href="/user/direct-debit/0?utm_medium=web&utm_source=itoll&utm_campaign=core-directdebit-activation&utm_term=menu&utm_content=activation-directdebit"
              
            >
              <div
                className="menu-item d-flex justify-space-between align-center pt-3"
                
              >
                <div className="d-flex align-center" >
                  <p className="mb-0" >
                    {" "}
                    فعال کردن پرداخت مستقیم{" "}
                  </p>
                </div>
              </div>
            </a>
            <div className="divider-line my-2"  />
          </div>
          <div
            role="list"
            className="v-list py-0 v-sheet theme--light"
            
          >
            <div className="v-list-group menu-list-group" >
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  
                ></div>
                <div className="v-list-item__content" >
                  <div
                    className="v-list-item__title menu-list-group-title"
                    
                  >
                    {" "}
                    بدهی خودرو{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="v-list-group menu-list-group" >
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  
                ></div>
                <div className="v-list-item__content" >
                  <div
                    className="v-list-item__title menu-list-group-title"
                    
                  >
                    {" "}
                    بیمه{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="v-list-group menu-list-group" >
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  
                ></div>
                <div className="v-list-item__content" >
                  <div
                    className="v-list-item__title menu-list-group-title"
                    
                  >
                    {" "}
                    استعلام مدارک{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="v-list-group menu-list-group" >
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  
                ></div>
                <div className="v-list-item__content" >
                  <div
                    className="v-list-item__title menu-list-group-title"
                    
                  >
                    {" "}
                    کارپرداز{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="v-list-group menu-list-group" >
              <div
                tabIndex={0}
                aria-expanded="false"
                role="button"
                className="v-list-group__header v-list-item v-list-item--link theme--light"
              >
                <div
                  className="v-list-item__icon ml-3"
                  
                ></div>
                <div className="v-list-item__content" >
                  <div
                    className="v-list-item__title menu-list-group-title"
                    
                  >
                    {" "}
                    تعمیر و نگهداری خودرو{" "}
                  </div>
                </div>
                <div className="v-list-item__icon v-list-group__header__append-icon">
                  <span
                    aria-hidden="true"
                    className="v-icon notranslate theme--light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      className="v-icon__svg"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="divider-line my-2"  />
          <a href="/b2b" >
            <div className="menu-item d-flex align-center" >
              <p className="mb-0" >
                {" "}
                کسب درآمد از های{" "}
              </p>
            </div>
          </a>
          <a href="/contact" >
            <div className="menu-item d-flex align-center" >
              <p className="mb-0" >
                {" "}
                پشتیبانی{" "}
              </p>
            </div>
          </a>
          <a
            id="side_menu_logout"
            // text=""
            href="#logout"
            style={{ display: "none" }}
            
          >
            <div className="menu-item d-flex align-center" >
              <p className="mb-0" >
                {" "}
                خروج از حساب کاربری{" "}
              </p>
            </div>
          </a>
        </div>
        <div
          className="v-dialog__container"
          
        ></div>
        <div
          className="v-dialog__container"
    
          
        ></div>
      </div>
      <div className="v-navigation-drawer__border" />
    </aside>
  );
}
