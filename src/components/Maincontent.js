import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../Assets/club1.jpg";
import jurusan2 from "./../Assets/club6.jpg";
import jurusan3 from "./../Assets/club3.jpg";
import jurusan4 from "./../Assets/club4.jpg";
import Kegiatan1 from "./../Assets/club5.jpg";
import Kegiatan2 from "./../Assets/club2.jpg";
import Kegiatan3 from "./../Assets/club7.jpg";
import Kegiatan4 from "./../Assets/club1.jpg";

const Maincontent = ()=> {
	return(
		<div>
			<Hero />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 text-center my-5">
						<h1>Jurusan Sekolah</h1>
					</div>
					<div className="col-lg-3 col-12">
						<Cardjurusan image={jurusan1} jurusan="Bahasa" description="lorem ipsum dolor sit amet"/>
					</div>
					<div className="col-lg-3 col-12">
						<Cardjurusan image={jurusan2} jurusan="Olahraga" description="lorem ipsum dolor sit amet"/>
					</div>
					<div className="col-lg-3 col-12">
						<Cardjurusan image={jurusan3} jurusan="Jurnalistik" description="lorem ipsum dolor sit amet"/>
					</div>
					<div className="col-lg-3 col-12">
						<Cardjurusan image={jurusan4} jurusan="Musik" description="lorem ipsum dolor sit amet"/>
					</div>
				</div>

				<div className="row">
					<div className="col=12 text-center my-5">
						<h1>Kegiatan</h1>
					</div>
					<div className="col-12 mb-5">
						<Cardkegiatan image={Kegiatan1} description="Some quick example text to build on the card title and make up the
            				bulk of the card's content."/>
					</div>
					<div className="col-12 mb-5">
						<Cardkegiatan image={Kegiatan2} description="Some quick example text to build on the card title and make up the
            				bulk of the card's content."/>
					</div>
					<div className="col-12 mb-5">
						<Cardkegiatan image={Kegiatan3} description="Some quick example text to build on the card title and make up the
            				bulk of the card's content."/>
					</div>
					<div className="col-12 mb-5">
						<Cardkegiatan image={Kegiatan4} description="Some quick example text to build on the card title and make up the
            				bulk of the card's content."/>
					</div>
				</div>

			</div>
		</div>
	)
}
export default Maincontent;
