import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import ship from "../assets/ship.png"; // Update the path to your image
import { useState } from "react";
import FadeIn from "../components/FadeIn";
import TeamCard from "../components/TeamCard";
import FadeInContent from "../components/FadeInContent";
import bg from "../assets/Background.png";
import PageTitle from "../components/PageTitle";
import blueStone2 from "../assets/blue-bottle.webp";
import PageLoader from "../components/PageLoader";
import DefaultIMG from "../assets/defaultIMG.jpg";

const Team = () => {
  const [team24, setTeam24] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(0); // Track scroll state to apply animation
  const [transitioned, setTransitioned] = useState(false);

  useEffect(() => {
    if (!loading) {
      const item = document.getElementById("team-title");

      const handleScroll = (e) => {
        e.preventDefault();

        // Get the current position of the image in horizontal scroll (translateX)
        const currentPosition = parseInt(
          item.querySelector("img").style.transform.replace("translateX(", "").replace("px)", "")
        );


        if (e.deltaY > 0) {
          if (currentPosition > -window.innerWidth/1.28) {
            setScrolling((prev) => prev + 5);
            if (scrolling+5 >= currentPosition/10) {
              setTimeout(() => {
                setTransitioned(true); // Set transitioned flag to true after 1 second
              }, 1500);}
          }
          if (transitioned) {
            window.scrollBy(0, 20);
          }
        } else {
          window.scrollBy(0, -20);
        }
      };

      item.addEventListener("wheel", handleScroll, { passive: false });

      return () => {
        item.removeEventListener("wheel", handleScroll);
      };
    }
  }, [loading, scrolling, transitioned]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;


    const verticles = [
      { "id": 1, "name": "Public Relations", "members": [
        {"id": 30, "name": "Anupam Singh Bhadouriya", "vertical": 3, "image": "https://imgur.com/fYyxlyR.jpg", "github_link": "", "instagram_link": "https://instagram.com/anupamsingh.25?igshid=YTQwZjQ0NmI0OA==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/anupam-singh-bhadouriya-525938256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "email": "bhadouriya.1@iitj.ac.in", "phoneNo": "7611856898"},
        {"id": 24, "name": "Nidhi Patel", "vertical": 3, "image": "https://imgur.com/5VZ7n6h.jpg", "github_link": "", "instagram_link": "https://instagram.com/nidhipatel233?igshid=dzFlYTl5bDFlODRh", "facebook_link": "", "linkedin_link": "", "email": "patel.32@iitj.ac.in", "phoneNo": "8154910122"},
        {"id": 12, "name": "Mohit Kumawat", "vertical": 3, "image": "https://imgur.com/sYVNQBi.jpg", "github_link": "", "instagram_link": "https://www.instagram.com/_kumawatmohit_/", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/kumawat-mohit/", "email": "kumawat.7@iitj.ac.in", "phoneNo": "7378242131"},
      ] },
      { "id": 2, "name": "Technical Events", "members": [
        {"id": 16, "name": "Devang Shrivastava", "vertical": 4, "image": "https://imgur.com/3ZAH9R3.jpg", "github_link": "", "instagram_link": "", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/feed/", "email": "shrivastava.11@iitj.ac.in", "phoneNo": "8889485733"},
        {"id": 13, "name": "Vidit Agrawal", "vertical": 4, "image": "https://imgur.com/lmdJZST.jpeg", "github_link": "", "instagram_link": "https://www.instagram.com/vidit2108/", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/vidit-agrawal-9a8496259/", "email": "agg", "phoneNo": "8140223000"},
        {"id": 2, "name": "Harshil Kaneria", "vertical": 4, "image": "https://imgur.com/fOpcdN2.jpg", "github_link": "", "instagram_link": "https://instagram.com/harshil__0733?igshid=MzNlNGNkZWQ4Mg==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/harshil-kaneria-917694229", "email": "k", "phoneNo": "7276464726"},
      ] },
      { "id": 3, "name": "Exhibition", "members":[
        {"id": 18, "name": "Ameen Rizvi", "vertical": 6, "image": "https://imgur.com/cOkcKcT.jpg", "github_link": "", "instagram_link": "https://www.instagram.com/a.mean.rizvi/", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/ameen-rizvi-755a7b224/", "email": "rizvi.1@iitj.ac.in", "phoneNo": "7045734582"},
        {"id": 5, "name": "Sandeep Singh", "vertical": 6, "image": "https://imgur.com/xJqIxlA.jpg", "github_link": "", "instagram_link": "https://instagram.com/innate.champ_sandy?igshid=OGQ5ZDc2ODk2ZA==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/sandeep-singh-401486227/", "email": "s", "phoneNo": "8467883884"},
        {"id": 22, "name": "Rishav Aich", "vertical": 6, "image": "https://imgur.com/PNejO2y.jpg", "github_link": "", "instagram_link": "https://instagram.com/rishavaich511?igshid=MzMyNGUyNmU2YQ==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/rishav-aich-ba88a7228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "email": "", "phoneNo": "7682816827"},
      ] },
      { "id": 5, "name": "Informals Events", "members":[
      ] },
      { "id": 7, "name": "Pronite", "members":[
        {"id": 15, "name": "Shivanshu Tomar", "vertical": 7, "image": "https://imgur.com/1VqE3PX.jpg", "github_link": "", "instagram_link": "https://instagram.com/vanshu_notfound?igshid=OGQ5ZDc2ODk2ZA==", "facebook_link": "", "linkedin_link": "https://in.linkedin.com/in/shivanshu-tomar-44355122b", "email": "", "phoneNo": "8384046310"},
        {"id": 10, "name": "Sushant Chivale", "vertical": 7, "image": "https://imgur.com/z0YkmAp.jpg", "github_link": "", "instagram_link": "https://instagram.com/sushant_chivale?igshid=OGQ5ZDc2ODk2ZA==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/sushant-chivale-ab6706234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "email": "", "phoneNo": "8888424929"},
      ] },
      { "id": 8, "name": "Marketing", "members":[
          // No members data provided
      ] },
      { "id": 9, "name": "Design and Creativity", "members": [
        {"id": 7, "name": "Shashwat Sharma", "vertical": 10, "image": "https://imgur.com/bIVx2mS.png", "github_link": "", "instagram_link": "https://www.instagram.com/sshashwat56/", "facebook_link": "", "linkedin_link": "http://www.linkedin.com/in/shashwat-sharma-2189b3223", "email": "sharma.133@iitj.ac.in", "phoneNo": "8052521146"},
        {"id": 14, "name": "Samyak Haribhakta", "vertical": 10, "image": "https://imgur.com/MHcUjnb.jpg", "github_link": "", "instagram_link": "https://www.instagram.com/samyak._02/", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/samyak-haribhakta-6b644a230/", "email": "", "phoneNo": "8263809204"},
        {"id": 4, "name": "Sanya Shankar", "vertical": 10, "image": "https://imgur.com/dzpNs0Z.jpg", "github_link": "", "instagram_link": "https://instagram.com/sny.dsgn?igshid=OGQ5ZDc2ODk2ZA==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/sanya-shankar-bb2ab5201", "email": "m23ldx028@iitj.ac.in", "phoneNo": "9650662994"},
        {"id": 19, "name": "Pooja porwal", "vertical": 10, "image": "https://imgur.com/cIWc4Q5.jpg", "github_link": "", "instagram_link": "https://instagram.com/porwal_pooja18?igshid=OGQ5ZDc2ODk2ZA==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/pooja-porwal-aa5a39254", "email": "", "phoneNo": "8275682889"},
      ]},
      { "id": 11, "name": "Web Development Team", "members": [
        {"id": 21, "name": "Jason Daniel", "vertical": 11, "image": "https://imgur.com/fWW98JG.jpeg", "github_link": "", "instagram_link": "https://www.instagram.com/jason_dan_iel/", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/jason-daniel-541ab8231/", "email": "daniel.2@iitj.ac.in", "phoneNo": "7340293578"},
        {"id": 37, "name": "Rohit Kori", "vertical": 11, "image": "https://imgur.com/A9B91WY.jpg", "github_link": "https://github.com/rohitkori", "instagram_link": "", "facebook_link": "", "linkedin_link": "", "email": "", "phoneNo": "74407 77945"},
        {"id": 38, "name": "Yuvraj Rathva", "vertical": 11, "image": "https://imgur.com/87VDNd2.jpg", "github_link": "", "instagram_link": "", "facebook_link": "", "linkedin_link": "", "email": "", "phoneNo": "95100 71874"},
      ]},
      { "id": 12, "name": "App Development Team", "members":[
        {"id": 1, "name": "Ritik Tiwari", "vertical": 12, "image": "https://imgur.com/vA4fwxw.jpeg", "github_link": "", "instagram_link": "https://www.instagram.com/tiwari_1kt/", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/ritiktiwari95/", "email": "tiwari.26@iitj.ac.in", "phoneNo": "9555092875"}
      ] },
      { "id": 13, "name": "Publicity and Media", "members":[]},
      { "id": 14, "name": "Accommodation, Transportation and Security", "members":[
        {"id": 26, "name": "Virender Parasariya", "vertical": 16, "image": "https://imgur.com/IxlzCtl.jpg", "github_link": "", "instagram_link": "https://instagram.com/virender_parasariya?igshid=MzMyNGUyNmU2YQ==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/virender-parasariya-8320631b6", "email": "parasariya.1@iitj.ac.in", "phoneNo": "9079199488"},
        {"id": 25, "name": "Praneeth Chiluvuri", "vertical": 16, "image": "https://imgur.com/22ECB5i.jpg", "github_link": "", "instagram_link": "https://instagram.com/praneeth_chiluvuri?igshid=MXJ1cmo0cXVkMGZ3Zw==", "facebook_link": "", "linkedin_link": "", "email": "", "phoneNo": "7901463683"},
        {"id": 23, "name": "Hima Varshitha", "vertical": 16, "image": "https://imgur.com/pk2KVzk.jpg", "github_link": "", "instagram_link": "https://instagram.com/hima_varshi.02?igshid=NzZlODBkYWE4Ng==", "facebook_link": "", "linkedin_link": "", "email": "", "phoneNo": "8247374036"},
        {"id": 32, "name": "Satvik", "vertical": 16, "image": "uploads/team/IMG_2880_-_Pulipati_Surya_Sai_Satwik_B21CI034.webp", "github_link": "", "instagram_link": "https://www.instagram.com/_p.s.s.satwik_/", "facebook_link": "", "linkedin_link": "", "email": "", "phoneNo": "7680097742"},
      ]},
      { "id": 15, "name": "E-Conclave", "members":[
        {"id": 35, "name": "Dhyan Naik", "vertical": 19, "image": "https://imgur.com/gLOpEme.jpg", "github_link": "", "instagram_link": "https://www.instagram.com/dhyan_011/", "facebook_link": "", "linkedin_link": "", "email": "naik.10@iitj.ac.in", "phoneNo": "6354166651"},
        {"id": 34, "name": "Jaydeep Prajapati", "vertical": 19, "image": "https://imgur.com/PQyOsMw.webp", "github_link": "", "instagram_link": "", "facebook_link": "", "linkedin_link": "", "email": "prajapati.6@iitj.ac.in", "phoneNo": "‪+91 9824413660‬"}, 
      ]},
      { "id": 14, "name": "Resources", "members":[
        {"id": 17, "name": "Keshav Maheshwari", "vertical": 14, "image": "https://imgur.com/bsHXf41.jpg", "github_link": "", "instagram_link": "https://instagram.com/k.4_keshav?igshid=MWhuNXV0azgxOGplNg==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/keshav-maheshwari-068375236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "email": "maheshwari.10@iitj.ac.in", "phoneNo": "7880024646"},
      {"id": 6, "name": "Bhupendra Sharma", "vertical": 14, "image": "https://imgur.com/E8NGxwR.jpg", "github_link": "", "instagram_link": "https://instagram.com/sharma_bhupendra.101?igshid=YzAwZjE1ZTI0Zg==", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/bhupendra-sharma-b1593823a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHKH3fR0cTbiuppz5w1Izng%3D%3D", "email": "", "phoneNo": "9772926500"},
      ]},
      { "id": 14, "name": "Content Writing", "members": [
        {"id": 8, "name": "Ananya Jain", "vertical": 18, "image": "https://imgur.com/AuruNT8.jpeg", "github_link": "", "instagram_link": "https://instagram.com/ananyaj_16?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/ananya-jain16?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", "email": "m22ms098@iitj.ac.in", "phoneNo": "8519007891"},
      ]},
      { "id": 14, "name": "Coordinator", "members":[]},
      { "id": 14, "name": "Festival Chiefs", "members":[
        {"id": 29, "name": "Shreejan Kumar", "vertical": 15, "image": "https://imgur.com/PCvP4fA.jpeg", "github_link": "", "instagram_link": "https://instagram.com/kumar_shreejan?igshid=eXJkbjBjdmVrZGFu", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/shreejan-kumar/", "email": "kumar.301@iitj.ac.in", "phoneNo": "9920320934"},
        {"id": 31, "name": "Kushal Agarwal", "vertical": 15, "image": "https://imgur.com/J9JZPBo.jpg", "github_link": "", "instagram_link": "", "facebook_link": "", "linkedin_link": "", "email": "agarwal.26@iitj.ac.in", "phoneNo": "9140806190"},
        {"id": 27, "name": "Niyant Shukla", "vertical": 15, "image": "https://imgur.com/vo3nxeH.PNG", "github_link": "", "instagram_link": "https://instagram.com/niyant_shukla.7?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr", "facebook_link": "", "linkedin_link": "https://www.linkedin.com/in/niyant-shukla-51ba37221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", "email": "prometeo@iitj.ac.in", "phoneNo": "9316772479"},
        {"id": 3, "name": "Mayank Srivastava", "vertical": 15, "image": "https://imgur.com/Vp1WzaO.jpg", "github_link": "", "instagram_link": "https://instagram.com/0o_mayank_oo?igshid=OGQ5ZDc2ODk2ZA==", "facebook_link": "", "linkedin_link": "", "email": "srivastava.31@iitj.ac.in", "phoneNo": "9519695188"},
      ]},
    ];

    setTeam24(verticles);
    setMembers(verticles.members);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div className="team-main" style={{ backgroundImage: `url(${bg})` }}>
            <div id="team-title" className="team-title">
              <img
                src="src/assets/ship.png"
                style={{
                  transform: `translateX(-${scrolling * 10}px)`, // Apply horizontal translation based on scroll state
                  transition: "transform 0.9s ease-out", // Smooth transition for transform
                }}
                alt=""
              />
            </div>
            <div className="team-section">
              {team24.map((member) => (
                <FadeInContent key={member.id}>
                  <div className="team-position-section">
                    <div className="team-verticle">
                      <h1>{member.name}</h1>
                    </div>
                    <div className="team-cards-container">
                      {member.members.map((team) => (
                        <TeamCard
                          key={team.id}
                          name={team.name}
                          position={team.vertical_name}
                          imgURL={team.image}
                          phone={team.phoneNo}
                          email={team.email}
                          linkedin={team.linkedin_link}
                          instagram={team.instagram_link}
                        />
                      ))}
                    </div>
                    {/* <div className="team-cards-container">
                      <TeamCard
                        key={member.id}
                        name={member.name}
                        position={member.vertical_name}
                        imgURL={member.image}
                        phone={member.phoneNo}
                        email={member.email}
                        linkedin={member.linkedin_link}
                        instagram={member.instagram_link}
                      />
                    </div> */}
                  </div>
                </FadeInContent>
              ))}
            </div>
            <div className="past-team-main">
              <Link to="/team23">
                <button className="past-team-btn">
                  Checkout Team Prometeo'23
                </button>
              </Link>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Team;
