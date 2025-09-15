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
  Users
} from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('landing');

  const sections = [
    { id: 'landing', label: 'About', icon: Home },
    { id: 'features', label: 'Features', icon: Star },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'industries', label: 'Industries', icon: Users }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Shield className="logo-icon" />
            <span>GRC AI</span>
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
                    AI-Native Compliance & Audit Automation for Energy & Gas
                  </h1>
                  <p className="hero-subtitle">
                    Automate up to 70% of compliance tasks, reduce audit costs, and stay ahead of regulations with AI.
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
                <h2 className="section-title">Why Compliance in Energy is Broken</h2>
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
                <h2 className="section-title">Your AI Co-Pilot for Energy Compliance</h2>
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
                <h2 className="section-title">Powerful Features for Energy Compliance</h2>
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
                  <p>Upload & edit energy compliance documents with AI-powered assistance and automated formatting.</p>
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
                  <h3>Risk Dashboard</h3>
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
                    <Database />
                  </div>
                  <h3>Data Integrations</h3>
                  <p>Connect SCADA, ERP, IoT sensors, and other systems for comprehensive data visibility.</p>
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
              <div className="section-header">
                <h2 className="section-title">Certifications & Regulatory Compliance</h2>
                <p className="section-subtitle">
                  Comprehensive coverage of energy industry standards and regulations
                </p>
              </div>
              <div className="certifications-grid">
                <div className="cert-category">
                  <h3>Safety Standards</h3>
                  <div className="cert-list">
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>ISO 45001 - Occupational Health & Safety</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>OSHA 29 CFR 1910 - General Industry</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>API RP 75 - Offshore Safety</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>NFPA 70E - Electrical Safety</span>
                    </div>
                  </div>
                </div>
                <div className="cert-category">
                  <h3>Environmental Standards</h3>
                  <div className="cert-list">
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>ISO 14001 - Environmental Management</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>EPA Clean Air Act</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>Clean Water Act</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>RCRA - Waste Management</span>
                    </div>
                  </div>
                </div>
                <div className="cert-category">
                  <h3>Quality & Process</h3>
                  <div className="cert-list">
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>ISO 9001 - Quality Management</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>API Q1 - Quality for Oil & Gas</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>ISO 50001 - Energy Management</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>ASME BPVC - Pressure Vessels</span>
                    </div>
                  </div>
                </div>
                <div className="cert-category">
                  <h3>Industry Specific</h3>
                  <div className="cert-list">
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>API 1169 - Pipeline Inspector</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>NERC CIP - Critical Infrastructure</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>DOT 49 CFR - Transportation</span>
                    </div>
                    <div className="cert-item">
                      <Award className="cert-icon" />
                      <span>FERC - Federal Energy Regulatory</span>
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
                <h2 className="section-title">Built for the Energy Industry</h2>
                <p className="section-subtitle">
                  Trusted by leading companies across the energy sector
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
                  <h3>Renewable Energy</h3>
                  <p>Solar, wind, and hydroelectric facilities</p>
                  <ul className="industry-features">
                    <li>Grid Integration Standards</li>
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
              Join leading energy companies who trust GRC AI for their compliance needs
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
              <span>GRC AI</span>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#industries">Industries</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 GRC AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;