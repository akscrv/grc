import { useState } from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  Brain, 
  FileText, 
  Shield, 
  Workflow, 
  Database, 
  Eye,
  Clock,
  DollarSign,
  TrendingUp,
  Zap,
  Leaf,
  Flame,
  Wind,
  Building,
  Factory,
  ChevronRight,
  Play,
  Home,
  Star,
  Award,
  Users,
  Settings,
  Users2,
  Timer
} from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('landing');

  const sections = [
    { id: 'landing', label: 'About', icon: Home },
    { id: 'features', label: 'Features', icon: Star },
    { id: 'certifications', label: 'Frameworks', icon: Award },
    { id: 'industries', label: 'Industries', icon: Users }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Shield className="logo-icon" />
            <span>COMPLYGRID</span>
          </div>
          <div className="nav-links">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <IconComponent className="nav-link-icon" />
                  {section.label}
                </button>
              );
            })}
            <button className="nav-cta">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="container">
          {/* Landing Section */}
          {activeSection === 'landing' && (
            <div className="section-content landing-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
              AI-Powered Compliance & Audits for Oil & Gas Leaders
              </h1>
              <p className="hero-subtitle">
              Transform governance, risk, and compliance management with real-time automation, AI policy editing, and unified dashboards tailored to the energy sector.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">
                  Get Started
                  <ChevronRight className="btn-icon" />
                </button>
                <button className="btn-secondary">
                  <Play className="btn-icon" />
                  Request Demo
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="dashboard-mockup">
                <div className="dashboard-header">
                  <div className="dashboard-title">Compliance Dashboard</div>
                  <div className="status-indicators">
                    <div className="status-item">
                      <CheckCircle className="status-icon success" />
                      <span>Compliant</span>
                    </div>
                    <div className="status-item">
                      <AlertTriangle className="status-icon warning" />
                      <span>2 Pending</span>
                    </div>
                  </div>
                </div>
                <div className="dashboard-grid">
                  <div className="dashboard-card">
                    <Flame className="card-icon" />
                    <div className="card-title">Safety Protocols</div>
                    <div className="card-status success">100%</div>
                  </div>
                  <div className="dashboard-card">
                    <Leaf className="card-icon" />
                    <div className="card-title">Environmental</div>
                    <div className="card-status success">98%</div>
                  </div>
                  <div className="dashboard-card">
                    <Shield className="card-icon" />
                    <div className="card-title">Regulatory</div>
                    <div className="card-status warning">85%</div>
                  </div>
                  <div className="dashboard-card">
                    <Brain className="card-icon" />
                    <div className="card-title">AI Insights</div>
                    <div className="card-status info">3 New</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

              <div className="challenge-section">
            <h2 className="section-title">Why Compliance in Oil & Gas is Broken</h2>
          <div className="challenge-grid">
            <div className="challenge-item">
              <AlertTriangle className="challenge-icon" />
              <h3>Thousands of evolving safety and environmental regulations</h3>
              <p>Stay updated with constantly changing compliance requirements across multiple jurisdictions.</p>
            </div>
            <div className="challenge-item">
              <Clock className="challenge-icon" />
              <h3>Manual audits cost thousands of man-hours</h3>
              <p>Traditional audit processes are time-consuming, expensive, and prone to human error.</p>
            </div>
            <div className="challenge-item">
              <DollarSign className="challenge-icon" />
              <h3>Non-compliance fines can reach millions</h3>
              <p>One oversight can result in massive financial penalties and reputational damage.</p>
            </div>
          </div>
        </div>

              <div className="solution-section">
              <h2 className="section-title">Your AI Co-Pilot for Oil & Gas Compliance</h2>
              <p className="section-subtitle">
                Centralize, automate, and predict compliance risks with AI.
              </p>
            <div className="solution-flow">
              <div className="flow-step">
                <div className="flow-icon">
                  <FileText />
                </div>
                <div className="flow-text">Documents</div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-icon">
                  <Brain />
                </div>
                <div className="flow-text">AI Processing</div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-icon">
                  <Shield />
                </div>
                <div className="flow-text">Dashboard</div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-icon">
                  <CheckCircle />
                </div>
                <div className="flow-text">Auditor Ready</div>
              </div>
            </div>
          </div>
        </div>
          )}

      {/* Features Section */}
          {activeSection === 'features' && (
            <div className="section-content features-section">
          <div className="section-header">
            <h2 className="section-title">Powerful Features for Oil & Gas Compliance</h2>
            <p className="section-subtitle">
              Everything you need to streamline compliance and reduce risk
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Brain />
              </div>
              <h3>DocPilot AI</h3>
              <p>Upload & edit Oil & Gas compliance documents with AI-powered assistance and automated formatting.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <CheckCircle />
              </div>
              <h3>Smart Audit Checklists</h3>
              <p>Automated checklists that adapt to your specific operations and regulatory requirements.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield />
              </div>
                  <h3>Custom Audit Dashboard</h3>
              <p>Real-time visibility into compliance risks with predictive analytics and alerts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Workflow />
              </div>
              <h3>CAPA Workflow</h3>
              <p>Streamlined Corrective and Preventive Action workflows with automated tracking.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                    <Users2 />
              </div>
                  <h3>Team Collaboration & Task Auditing</h3>
                  <p>Streamline team workflows with collaborative tools and comprehensive task auditing capabilities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Eye />
              </div>
              <h3>Regulation Watchdog</h3>
              <p>Stay ahead of regulatory changes with AI-powered monitoring and impact analysis.</p>
            </div>
          </div>

              <div className="benefits-section">
            <h2 className="section-title">The Results You Get</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <Clock className="benefit-icon" />
              <h3>Save Time</h3>
              <p>Reduce compliance tasks by up to 70% with automation</p>
            </div>
            <div className="benefit-item">
              <DollarSign className="benefit-icon" />
              <h3>Lower Costs</h3>
              <p>Cut audit expenses and eliminate manual processes</p>
            </div>
            <div className="benefit-item">
              <Shield className="benefit-icon" />
              <h3>Minimize Risk</h3>
              <p>Predict and prevent compliance issues before they occur</p>
            </div>
            <div className="benefit-item">
              <TrendingUp className="benefit-icon" />
              <h3>Boost Productivity</h3>
              <p>Focus your team on strategic initiatives, not paperwork</p>
            </div>
            <div className="benefit-item">
              <Leaf className="benefit-icon" />
              <h3>ESG Ready</h3>
              <p>Meet environmental, social, and governance requirements</p>
            </div>
          </div>
        </div>
            </div>
          )}

          {/* Certifications Section */}
          {activeSection === 'certifications' && (
            <div className="section-content certifications-section">
              <div className="certifications-hero">
                <div className="hero-badge">
                  <Award className="badge-icon" />
                  <span>Compliance Excellence</span>
                </div>
                <h1 className="hero-title">Certifications & Regulatory Compliance</h1>
                <p className="hero-subtitle">
                  Comprehensive coverage of Oil & Gas industry standards and regulations
                </p>
              </div>

              <div className="frameworks-showcase">
                <div className="showcase-header">
                  <h2 className="showcase-title">Supported Compliance Frameworks</h2>
                  <div className="showcase-subtitle">Trusted by industry leaders</div>
                </div>
                <div className="frameworks-masonry">
                  <div className="framework-card primary">
                    <div className="card-glow"></div>
                    <Shield className="framework-icon" />
                    <h3>HSE Audits</h3>
                    <p>Health, Safety & Environment</p>
                  </div>
                  <div className="framework-card secondary">
                    <div className="card-glow"></div>
                    <CheckCircle className="framework-icon" />
                    <h3>ISO Standards</h3>
                    <p>International Standards</p>
                  </div>
                  
                  
                  
                  <div className="framework-card tertiary">
                    <div className="card-glow"></div>
                    <Timer className="framework-icon" />
                    <h3>Custom Frameworks</h3>
                    <p>Tailored Solutions</p>
                  </div>
                </div>
              </div>

              <div className="regulatory-showcase">
                <div className="showcase-header">
                  <h2 className="showcase-title">Regulatory Bodies We Work With</h2>
                  <div className="showcase-subtitle">13+ Federal Agencies & Commissions</div>
                </div>
                <div className="regulatory-masonry">
                  <div className="regulatory-card featured">
                    <div className="card-number">01</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">OSHA</div>
                      <div className="regulatory-name">Occupational Safety and Health Administration</div>
                    </div>
                  </div>
                  <div className="regulatory-card">
                    <div className="card-number">02</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">FCC</div>
                      <div className="regulatory-name">Federal Communications Commission</div>
                    </div>
                  </div>
                  <div className="regulatory-card">
                    <div className="card-number">03</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">EEOC</div>
                      <div className="regulatory-name">Equal Employment Opportunity Commission</div>
                    </div>
                  </div>
                  <div className="regulatory-card featured">
                    <div className="card-number">04</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">EPA</div>
                      <div className="regulatory-name">Environmental Protection Agency</div>
                    </div>
                  </div>
                  <div className="regulatory-card">
                    <div className="card-number">05</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">SEC</div>
                      <div className="regulatory-name">Securities Exchange Commission</div>
                    </div>
                  </div>
                  <div className="regulatory-card">
                    <div className="card-number">06</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">CSB</div>
                      <div className="regulatory-name">Chemical Safety and Hazard Investigation Board</div>
                    </div>
                  </div>
                  <div className="regulatory-card featured">
                    <div className="card-number">07</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">FERC</div>
                      <div className="regulatory-name">Federal Energy Regulatory Commission</div>
                    </div>
                  </div>
                  <div className="regulatory-card">
                    <div className="card-number">08</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">NLRB</div>
                      <div className="regulatory-name">National Labor Relations Board</div>
                    </div>
                  </div>
                  <div className="regulatory-card">
                    <div className="card-number">09</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">BLM</div>
                      <div className="regulatory-name">Bureau of Land Management</div>
                    </div>
                  </div>
                  <div className="regulatory-card">
                    <div className="card-number">10</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">BOEM</div>
                      <div className="regulatory-name">Bureau of Ocean Energy Management</div>
                    </div>
                  </div>
                  <div className="regulatory-card">
                    <div className="card-number">11</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">BSEE</div>
                      <div className="regulatory-name">Bureau of Safety and Environmental Enforcement</div>
                    </div>
                  </div>
                  <div className="regulatory-card">
                    <div className="card-number">12</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">PHMSA</div>
                      <div className="regulatory-name">Pipeline and Hazardous Material Safety Administration</div>
                    </div>
                  </div>
                  <div className="regulatory-card featured">
                    <div className="card-number">13</div>
                    <div className="card-content">
                      <div className="regulatory-acronym">DOE</div>
                      <div className="regulatory-name">US Department of Energy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Industries Section */}
          {activeSection === 'industries' && (
            <div className="section-content industries-section">
          <div className="section-header">
            <h2 className="section-title">Built for the Oil & Gas Industry</h2>
            <p className="section-subtitle">
              Trusted by leading companies across the Oil & Gas sector
            </p>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <Flame className="industry-icon" />
              <h3>Oil & Gas</h3>
              <p>Upstream, midstream, and downstream operations</p>
                  <ul className="industry-features">
                    <li>Drilling & Production Compliance</li>
                    <li>Pipeline Safety Management</li>
                    <li>Refinery Operations</li>
                    <li>Environmental Monitoring</li>
                  </ul>
            </div>
            <div className="industry-card">
              <Wind className="industry-icon" />
              <h3>Oil & Gas Services</h3>
              <p>Upstream, midstream, and downstream operations</p>
                  <ul className="industry-features">
                    <li>Pipeline Operations</li>
                    <li>Environmental Impact Assessment</li>
                    <li>Safety & Maintenance Protocols</li>
                    <li>Regulatory Reporting</li>
                  </ul>
            </div>
            <div className="industry-card">
              <Zap className="industry-icon" />
              <h3>Utilities</h3>
              <p>Power generation and distribution companies</p>
                  <ul className="industry-features">
                    <li>NERC CIP Compliance</li>
                    <li>Grid Reliability Standards</li>
                    <li>Environmental Permits</li>
                    <li>Safety Management Systems</li>
                  </ul>
            </div>
            <div className="industry-card">
              <Building className="industry-icon" />
              <h3>Manufacturing</h3>
              <p>Industrial facilities and production plants</p>
                  <ul className="industry-features">
                    <li>Process Safety Management</li>
                    <li>Quality Control Systems</li>
                    <li>Environmental Compliance</li>
                    <li>Occupational Safety</li>
                  </ul>
            </div>
            <div className="industry-card">
              <Factory className="industry-icon" />
              <h3>Heavy Industry</h3>
              <p>Chemical, petrochemical, and processing facilities</p>
                  <ul className="industry-features">
                    <li>Process Safety Management</li>
                    <li>Hazardous Materials Handling</li>
                    <li>Environmental Monitoring</li>
                    <li>Emergency Response Planning</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Call-to-Action Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Future-proof your compliance with AI</h2>
            <p className="cta-subtitle">
              Join leading Oil & Gas companies who trust COMPLYGRID for their compliance needs
            </p>
            <div className="cta-buttons">
              <button className="btn-primary large">
                Get Started
                <ChevronRight className="btn-icon" />
              </button>
              <button className="btn-secondary large">
                <Play className="btn-icon" />
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Shield className="logo-icon" />
              <span>COMPLYGRID</span>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#industries">Industries</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 COMPLYGRID. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;