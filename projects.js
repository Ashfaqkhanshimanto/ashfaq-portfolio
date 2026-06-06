const projects = {
  "corporate-network": {
    title: "Corporate Private Network Lab",
    description: "This project simulates a small company private network using Windows Server and Windows client machines.",
    overview: "I configured Windows Server as a domain controller and set up Active Directory, DNS, and DHCP services. I also joined Windows client machines to the domain and tested domain login, IP address assignment, name resolution, and shared folder access.",
    technologies: ["Windows Server", "Active Directory", "DNS", "DHCP", "Windows Client", "VirtualBox", "Networking"],
    configured: [
      "Installed and configured Windows Server.",
      "Created a private internal network in VirtualBox.",
      "Configured Active Directory Domain Services.",
      "Created domain users for centralized login.",
      "Configured DNS for internal name resolution.",
      "Configured DHCP for automatic IP address assignment.",
      "Joined Windows client machines to the domain.",
      "Created and tested a shared company folder."
    ],
    learning: "This project helped me understand how a basic corporate network works, including centralized authentication, domain management, IP addressing, DNS resolution, and shared network resources.",
images: [
  {
    src: "project-images/corporate-network/01-server-manager-roles.png",
    caption: "Windows Server roles configured for the private network lab."
  },
  {
    src: "project-images/corporate-network/02-active-directory-users.png",
    caption: "Active Directory users created for centralized domain login."
  },
  {
    src: "project-images/corporate-network/03-dhcp-leases.png",
    caption: "DHCP leases showing automatic IP address assignment."
  },
  {
    src: "project-images/corporate-network/04-client-ipconfig-domain.png",
    caption: "Client network configuration showing domain connectivity."
  },
  {
    src: "project-images/corporate-network/05-domain-user-login-proof.png",
    caption: "Domain user login tested successfully on a Windows client."
  },
  {
    src: "project-images/corporate-network/06-shared-folder-access.png",
    caption: "Shared company folder access tested from a domain client."
  }
]
  },

  "moodle-ldap": {
    title: "Moodle Server with LDAP",
    description: "Installed and configured a Moodle learning platform on Ubuntu Server and connected it with Windows Server Active Directory using LDAP.",
    overview: "I installed Moodle with Apache, PHP, and MariaDB on Ubuntu Server. I configured LDAP authentication so Active Directory users could log in to Moodle.",
    technologies: ["Ubuntu Server", "Apache", "PHP", "MariaDB", "Moodle", "LDAP", "Windows Server", "Active Directory"],
    configured: [
      "Installed Ubuntu Server as the Moodle server.",
      "Installed Apache, PHP, and MariaDB.",
      "Created the Moodle database and database user.",
      "Installed and configured Moodle.",
      "Configured Windows Server Active Directory.",
      "Created users in Active Directory.",
      "Configured Moodle LDAP authentication settings.",
      "Tested Moodle login using Active Directory user accounts."
    ],
    learning: "This project helped me understand Linux web server setup, database configuration, Moodle administration, and LDAP-based centralized authentication."
  },

  "git-server": {
    title: "Self-Hosted Git Server with cgit",
    description: "Configured a private Git server on Ubuntu with SSH access and a cgit web interface.",
    overview: "I created a self-hosted Git server where repositories could be accessed through SSH and viewed through a browser using cgit.",
    technologies: ["Ubuntu Server", "Git", "SSH", "cgit", "UFW", "Linux"],
    configured: [
      "Installed Git on Ubuntu Server.",
      "Created a dedicated git user.",
      "Configured git-shell for restricted Git access.",
      "Created a bare Git repository.",
      "Configured SSH access for repository cloning.",
      "Configured UFW firewall rules.",
      "Installed and configured cgit web interface.",
      "Tested repository cloning from a client machine."
    ],
    learning: "This project helped me understand Git server hosting, Linux users, SSH access control, firewall rules, and web-based repository browsing."
  },

    "irc-chat": {
    title: "IRC Chat Server",
    description: "Configured a real-time chat server using Openfire with CLI and GUI clients.",
    overview: "I set up an internal chat server using Openfire and tested communication between users using Irssi and HexChat clients.",
    technologies: ["Openfire", "Irssi", "HexChat", "Ubuntu Server", "Real-Time Chat", "Networking"],
    configured: [
      "Installed and configured Openfire server.",
      "Created users for chat testing.",
      "Configured client access to the chat server.",
      "Connected to the server using Irssi CLI client.",
      "Connected to the server using HexChat GUI client.",
      "Created and tested a shared chat channel.",
      "Verified real-time messaging between users."
    ],
    learning: "This project helped me understand internal communication servers, chat clients, user testing, and real-time network communication."
  },

  "cisco-security": {
    title: "Cisco Network Security Lab",
    description: "Configured Cisco network security features in Packet Tracer.",
    overview: "I configured firewall rules, NAT, access control lists, secure management, and DMZ-related network security settings.",
    technologies: ["Cisco Packet Tracer", "ASA Firewall", "ACL", "NAT", "VPN", "Networking"],
    configured: [
      "Configured basic network addressing.",
      "Configured firewall interfaces.",
      "Created access control rules.",
      "Configured NAT rules.",
      "Configured secure remote management.",
      "Tested connectivity between internal, external, and DMZ networks."
    ],
    learning: "This project helped me understand firewall behavior, traffic filtering, NAT, DMZ concepts, and secure network design."
  },

  "collaborative-editor": {
    title: "Real-Time Collaborative Editor",
    description: "Developed a browser-based real-time collaborative text editor.",
    overview: "I developed a collaborative editor using Node.js, Yjs, and Hocuspocus. Multiple users could join the same room and edit text together in real time.",
    technologies: ["Node.js", "Yjs", "Hocuspocus", "JavaScript", "Render", "WebSocket"],
    configured: [
      "Created a Node.js project.",
      "Configured Yjs for real-time collaboration.",
      "Used Hocuspocus as the collaboration server.",
      "Added room-based editing.",
      "Added simple authentication.",
      "Deployed the project on Render.",
      "Tested editing from multiple browser windows."
    ],
    learning: "This project helped me understand real-time web applications, WebSocket communication, deployment, and collaborative editing systems."
  },

  "esports-fixture": {
    title: "Esports Fixture Generator",
    description: "Created a fixture generator concept for esports tournaments.",
    overview: "I created a project idea for generating match schedules for esports events, useful for gaming tournaments and team-based competitions.",
    technologies: ["HTML", "CSS", "JavaScript", "Tournament Scheduling", "Gaming"],
    configured: [
      "Designed a simple tournament fixture concept.",
      "Planned team input and match generation.",
      "Created a basic website structure.",
      "Focused on practical use for esports events."
    ],
    learning: "This project connects my IT learning with my interest in gaming and esports organization."
  }
};