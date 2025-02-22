import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section className="py-8 pt-20" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-3xl font-bold "
      >
        Education
      </motion.h2>
      {/* FOR SMOOTH ZOOM : transition-transform duration-300 hover:scale-110   */}
      {EDUCATION.map((edu, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="mb-5 p-10"
        >
          <h3 className="text-2xl font-semibold">{edu.degree}</h3>
          <p className="text-lg mb-1">{edu.institution}</p>
          <p className="text-sm text-stone-300 mb-3">{edu.duration}</p>
          <p className="mt-2">{edu.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default EducationSection;
