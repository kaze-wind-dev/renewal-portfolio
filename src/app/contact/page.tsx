"use cache";
import ContactForm from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/ui/BreadCrumb";
import styles from "./page.module.scss";

export default async function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact" }]} />
      <div className="l-container">
        <div className="inner">
          <div className={`${styles["p-contact"]}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
