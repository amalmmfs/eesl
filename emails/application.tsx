import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Font,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function ApplicationEmail({
  name,
  role,
  email,
  phone,
}: {
  name: string;
  role: string;
  email: string;
  phone: string;
  education: string;
}) {
  return (
    <Html>
      <Head />
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Preview>New Application Received for {role}</Preview>
      <Body
        style={{
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            margin: "0 auto",
            padding: "30px",
            maxWidth: "600px",
          }}
        >
          <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            style={{ marginBottom: "40px" }}
          >
            <tr>
              <td align="left" width="50%">
                <Img
                  src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/EESL-Logo.png"
                  width="160"
                  height="80"
                  alt="EESL Logo"
                />
              </td>
              <td align="right" width="50%">
                <Img
                  src="https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738227525/EESL/TCG-RISE.png"
                  width="160"
                  height="80"
                  alt="TCG RISE Logo"
                />
              </td>
            </tr>
          </table>
          <Heading
            style={{
              color: "#60a5fa",
              fontSize: "28px",
              fontWeight: "700",
              textAlign: "center",
              margin: "0 0 40px 0",
              letterSpacing: "-0.5px",
            }}
          >
            New Application Received
          </Heading>

          <Section
            style={{
              backgroundColor: "rgba(45, 45, 45, 0.8)",
              backdropFilter: "blur(12px)",
              borderRadius: "12px",
              padding: "25px",
              marginBottom: "24px",
              border: "1px solid rgba(96, 165, 250, 0.1)",
            }}
          >
            <Text
              style={{
                borderLeft: "4px solid #60a5fa",
                paddingLeft: "15px",
                color: "#60a5fa",
                fontSize: "18px",
                fontWeight: "600",
                margin: "0",
              }}
            >
              Position Applied For
            </Text>
            <Text
              style={{
                fontSize: "22px",
                margin: "12px 0 0 15px",
                fontWeight: "500",
              }}
            >
              {role}
            </Text>
          </Section>

          <Section
            style={{
              backgroundColor: "rgba(45, 45, 45, 0.8)",
              backdropFilter: "blur(12px)",
              borderRadius: "12px",
              padding: "25px",
              border: "1px solid rgba(96, 165, 250, 0.1)",
            }}
          >
            <Text
              style={{
                color: "#60a5fa",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "24px",
              }}
            >
              Applicant Details
            </Text>

            {[
              { label: "Full Name", value: name },
              { label: "Email Address", value: email },
              { label: "Phone Number", value: phone },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: "20px" }}>
                <Text
                  style={{
                    color: "#9ca3af",
                    margin: "0 0 6px 0",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {label}
                </Text>
                <Text
                  style={{
                    margin: "0",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {value}
                </Text>
              </div>
            ))}
          </Section>

          <Section
            style={{
              textAlign: "center",
              marginTop: "40px",
              padding: "20px 0 0",
              borderTop: "1px solid rgba(96, 165, 250, 0.1)",
            }}
          >
            <Text
              style={{
                color: "#9ca3af",
                fontSize: "14px",
                margin: "0",
                fontWeight: "500",
              }}
            >
              © {new Date().getFullYear()} EESL Recruitment Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
