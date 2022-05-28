import { motion } from 'framer-motion';
import './pageTitle.scss'

type PageTitleProps = {
  title: string;
  subtitle: string;
}
const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="page-title">
      <motion.h2
        initial={{ x: '50%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 3, type: "spring" }}>{title}</motion.h2>
      <motion.h3
        initial={{ x: '-50%' }}
        whileInView={{ x: '0%' }}
        transition={{ duration: 3, type: "spring" }}>{subtitle}</motion.h3>
      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 5, type: "spring" }} className="line" />
    </div>
  )
}

export default PageTitle