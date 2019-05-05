import React from "react";

import withInitial from "../../HOCs/withInitial";

import Registration from "../../Components/Registration";
import Auth from "../../Components/Auth";
import Todo from "../../Components/Todo";
import Preloader from "../../Components/Preloader";

const HomePage = ({
  view,
  switchLogin,
  handlerSubmit,
  registrationCallback,
  titleAuth,
  addError,
  authCallback,
  withData,
  data,
  user,
  callServer,
  logout
}) => (
  <div className="page__container home-page">
    {withData ? (
      <React.Fragment>
        {view === "registration" ? (
          <Registration
            submitCb={registrationCallback}
            switchLogin={switchLogin}
            handlerSubmit={handlerSubmit}
            addError={addError}
          />
        ) : view === "login" ? (
          <Auth
            submitCb={authCallback}
            title={titleAuth || "Log in and work on tasks"}
            switchLogin={switchLogin}
            handlerSubmit={handlerSubmit}
            addError={addError}
          />
        ) : (
          <Todo
            logout={logout}
            callServer={callServer}
            data={data}
            user={user}
          />
        )}
      </React.Fragment>
    ) : (
      <Preloader />
    )}
  </div>
);

export default withInitial(HomePage);
