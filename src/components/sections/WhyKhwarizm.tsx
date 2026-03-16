import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { values } from "@/data/values";

export default function WhyKhwarizm() {
    return (
        <section
            id="why-khwarizm"
            style={{
                paddingBlock: "var(--kh-space-section)",
                borderBlockStart: "1px solid var(--kh-border-subtle)",
                position: "relative",
            }}
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                        <SectionHeader
                            label="لماذا خوارزم"
                            title="معايير استثنائية لمن يبحثون عن الأفضل"
                            description="نحن لا نطور منتجات فحسب، بل نبني شراكات مع علامات تجارية طموحة تقدّر الدقة، الجودة، والابتكار."
                        />
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {values.map((value) => (
                                <Card
                                    key={value.id}
                                    hoverable
                                    style={{
                                        padding: "var(--kh-space-2xl)",
                                        backgroundColor: "transparent",
                                        border: "1px solid var(--kh-border-subtle)",
                                    }}
                                    className="flex flex-col h-full"
                                >
                                    <h3 className="text-h4" style={{ marginBlockEnd: "var(--kh-space-sm)" }}>
                                        {value.title}
                                    </h3>
                                    <p
                                        className="text-body flex-grow"
                                        style={{ color: "var(--kh-text-secondary)" }}
                                    >
                                        {value.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
