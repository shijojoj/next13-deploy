import React, { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu-data";

const imgStyle:CSSProperties = { width: "100%", height: "auto", objectFit: "cover" };
const HeaderMenus = () => {
  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id} className="has-dropdown">
          <Link href={menu.link}>{menu.title}</Link>
          {menu.home_menus ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-menu-fullwidth">
                
                
              </div>
            </div>



          ) : menu.pages_mega_menu ? (
            <div className="tp-submenu submenu tp-mega-menu">
             
            </div>
          ) : menu.portfolio_mega_menus ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-menu-fullwidth">
                <div className="tp-megamenu-portfolio p-relative">
                  <div className="tp-megamenu-portfolio-banner">
                    <Image
                      src="/assets/img/menu/portfolio-menu/portfolio.png"
                      alt="image"
                      width={438}
                      height={480}
                      style={imgStyle}
                    />
                  </div>
                  <div className="row gx-50">
                    <div className="col-xxl-9 col-xl-10">
                      <div className="tp-megamenu-list-box">
                        <div className="row gx-50">
                          <div className="col-xxl-5 col-xl-6">
                            <div className="tp-megamenu-list">
                              <h4 className="tp-megamenu-title">
                                {menu.portfolio_mega_menus.first.title}
                              </h4>
                              <div className="tp-megamenu-list-wrap tp-portfolio-menu-style">
                                <div className="row">
                                  {menu.portfolio_mega_menus.first.submenus.map(
                                    (portSm, i) => (
                                      <div key={i} className="col-lg-6">
                                        <ul>
                                          {portSm.menu_lists.map((psm) => (
                                            <li key={psm.title}>
                                              <Link href={psm.link}>
                                                {psm.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {menu.portfolio_mega_menus.second.submenus.map(
                            (portSm2, i) => (
                              <div key={i} className="col-xxl-3 col-xl-3">
                                <div className="tp-megamenu-list tp-megamenu-list-2 ml-20">
                                  <h4 className="tp-megamenu-title">
                                    {portSm2.title}
                                  </h4>
                                  <div className="tp-megamenu-list-wrap">
                                    <ul>
                                      {portSm2.menu_lists.map((psm) => (
                                        <li key={psm.title}>
                                          <Link href={psm.link}>
                                            {psm.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3 col-xl-3 d-none d-xxl-block">
                      <div className="tp-megamenu-portfolio-text">
                        <h4>60+</h4>
                        <span>Pre-built demo home page</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : menu.dropdown_menus ? (
            <ul className="tp-submenu submenu">
              {menu.dropdown_menus.map((mm, i) => (
                <li key={i}>
                  <Link href={mm.link}>{mm.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
