import { useParams } from "react-router-dom";
import { ProjecApiItemComponent } from "../components/ProjecApiItemComponent";
import { ProjecAppItemComponent } from "../components/ProjecAppItemComponent";
import { ProjecLibItemComponent } from "../components/ProjecLibItemComponent";
import { ProjecSiteItemComponent } from "../components/ProjecSiteItemComponent";
import { projectItems } from "../data/ProjectsData";
import { ProjectTag } from "../enums/ProjectTag";
import { ProjectType } from "../enums/ProjectType";
import s from "../modules/ProjectScreen.module.css";

export function Projects() {
  const appItems = projectItems.filter((v) => v.type == ProjectType.APP);
  const siteItems = projectItems.filter((v) => v.type == ProjectType.SITE);
  const apiItems = projectItems.filter((v) => v.type == ProjectType.API);
  const libIems = projectItems.filter((v) => v.type == ProjectType.LIB);

  const { tag } = useParams();

  if (tag != undefined)
    return (
      <div className={s.project_container}>
        {tag == ProjectTag.APP && (
          <>
            <h2 className={s.title}>Aplicativos</h2>
            {appItems.map((v, index) => (
              <ProjecAppItemComponent key={index} item={v} />
            ))}
          </>
        )}
        {tag == ProjectTag.SITE && (
          <>
            <h2 className={s.title}>Sites</h2>
            {siteItems.map((v, index) => (
              <ProjecSiteItemComponent key={index} item={v} />
            ))}
          </>
        )}

        {tag == ProjectTag.API && (
          <>
            <h2 className={s.title}>API's</h2>
            {apiItems.map((v, index) => (
              <ProjecApiItemComponent key={index} item={v} />
            ))}
          </>
        )}
        {tag == ProjectTag.LIB && (
          <>
            <h2 className={s.title}>Bibliotecas</h2>
            {libIems.map((v, index) => (
              <ProjecLibItemComponent key={index} item={v} />
            ))}
          </>
        )}
      </div>
    );
}

export function CustomSpacer() {
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <hr />
    </div>
  );
}
